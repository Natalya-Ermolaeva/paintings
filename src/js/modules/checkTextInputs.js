const checkTextInputs = (selector) => {
    const textInputs = document.querySelectorAll(selector);

    textInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^а-яё.,?!":;()\- 0-9]/ig, '');
        });
    });
};

export default checkTextInputs;
