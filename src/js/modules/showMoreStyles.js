import {getData} from '../services/requests';
import {createStatus, setStatus, statusText} from '../services/showStatusMessage';

const showMoreStyles = (triggerSelector, wrapperSelector) => {
    const trigger = document.querySelector(triggerSelector);
    const wrapper = document.querySelector(wrapperSelector);

    function showStatusMessage() {
        createStatus(trigger);
        setStatus('failure');

        statusText.style.cssText = `
            color: #E15B64;
            font-size: 1.8rem;
            margin-bottom: 30px;
        `;
    }

    trigger.addEventListener('click', function() {
        getData('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(() => showStatusMessage());

        this.style.display = 'none';
    });

    function createCards(res) {
        res.forEach(({src, title, link}) => {
            const div = document.createElement('div');
            div.classList.add('animated', 'fadeInUp','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            div.innerHTML = `
                <div class='styles-block'>
                    <img src=${src} alt=''>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
            wrapper.append(div);
        });
    } 
};

export default showMoreStyles;
