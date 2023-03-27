const message = {
    loading: ['assets/img/spinner.gif', 'Загрузка...'],
    success: ['assets/img/ok.png', 'Спасибо! Скоро мы с вами свяжемся'],
    failure: ['assets/img/fail.png', 'Что-то пошло не так...']
};

let statusMessage, statusImg, statusText;

function createStatus(wrapperSelector) {
    statusMessage = document.createElement('div');
    statusMessage.style.textAlign = 'center';
    statusMessage.classList.add('animated', 'fadeInUp');
    wrapperSelector.parentElement.append(statusMessage);
            
    statusImg = document.createElement('img');
    statusMessage.append(statusImg);
    
    statusText = document.createElement('p');
    statusMessage.append(statusText);
}

function setStatus(status) {
    statusImg.setAttribute('src', message[status][0]);
    statusText.textContent = message[status][1];
}

export {createStatus, setStatus, statusMessage, statusText};
