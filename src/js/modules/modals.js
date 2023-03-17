const modals = () => {
    const giftTrigger = document.querySelector('.fixed-gift');
    const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    let isbtnPressed = false;

    function openModal(modal) {
        modal.style.display = 'block';
        modal.setAttribute('data-modal-active', 'true');
        
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollWidth}px`;
       
        giftTrigger.style.right = `${(+getComputedStyle(giftTrigger).right.replace(/\D/g, '') + scrollWidth)}px`;
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        modal.setAttribute('data-modal-active', 'false');

        document.body.style.overflow = '';
        document.body.style.marginRight = '0';

        giftTrigger.style.right = '';
    }

    function bindModal(triggerSelector, modalSelector, closeSelector, isHideTrigger = false) {
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        triggers.forEach(item => {
            item.addEventListener('click', () => {
                isbtnPressed = true;
                openModal(modal); 

                if (isHideTrigger) {
                    item.style.display = 'none';
                }
            });
        });
    
        close.addEventListener('click', () => {
            closeModal(modal);
        });
    
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    }
  
    function showModalByTime(selector, time) {
        setTimeout(() => {
            if (!document.querySelector('[data-modal-active="true"]')) {
                openModal(document.querySelector(selector));
            }
        }, time);
    }

    function showModalEndWindow(selector) {
        window.addEventListener('scroll', () => {
            if (!isbtnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    showModalByTime('.popup-consultation', 60000);
    showModalEndWindow('.fixed-gift');
};

export default modals;
