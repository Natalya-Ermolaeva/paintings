import {postData} from '../services/requests';
import {createStatus, setStatus, statusMessage} from '../services/showStatusMessage';
import {result, disabledBtn} from './calc';
 
const forms = (formCalcData) => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const uploadBtns = document.querySelectorAll('[name="upload"]');
    const textarea  = document.querySelector('textarea');
    const selects  = document.querySelectorAll('select');
  
    const path = {
        designer: 'assets/designer.php',
        question: 'assets/question.php'
    };

    function clearValue() {
        inputs.forEach((item) => {
            item.value = '';
        });

        selects.forEach((item) => {
            item.value = '';
        });

        uploadBtns.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });

        textarea.value = '';
        result.textContent = 'Для расчета нужно выбрать размер картины и материал картины';

        disabledBtn.disabled = true;
    }

    uploadBtns.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            const arr = item.files[0].name.split('.');

            arr[0].length > 8 ? dots = '...' : dots = '.';
            const name = arr[0].slice(0, 8) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });
    
    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            createStatus(item);
            setStatus('loading');

            item.style.display = 'none';
                    
            let url;
            item.closest('.popup-design') || item.classList.contains('form-calc') ? url = path.designer : url = path.question;

            const formData = new FormData(item);
            if (item.classList.contains('form-calc')) {
                for (let key in formCalcData) {
                    formData.append(key, formCalcData[key]);
                }
            }

            postData(url, formData)
                .then(() => {
                    setStatus('success');
                })
                .catch(() => {
                    setStatus('failure');
                })
                .finally(() => {
                    clearValue();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.classList.add('animated', 'fadeInUp');
                        item.style.display = 'block';
                    }, 3000);
                });
        });
    });
};

export default forms;
