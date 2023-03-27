const phoneMask = (selector) => {
    const inputs = document.querySelectorAll(selector);
   
    function createMask() {
        const mask = '+375 (__) ___ - __ - __';
        const defaultValue = mask.replace(/\D/g, '');
        let value = this.value.replace(/\D/g, '');
        let i = 0;
      
        if (defaultValue.length >= value.length) {
            value = defaultValue;
        } 

        this.value = mask.replace(/./g, (char) => {
            return /[_\d]/.test(char) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : char;
        });

        this.addEventListener('blur', () => {
            if (this.value.length === 4)
                this.value = '';
        });

        this.addEventListener('click', () => {
            this.selectionStart = this.selectionEnd = this.value.length;
        });
    }

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
    });
};

export default phoneMask;
