import  getFormCalcData from './getFormCalcData';

let result, disabledBtn;

const calc = (sizeSelector, materialSelector, optionsSelector, promocodeSelector, resultSelector, btnSelector, formCalcData) => {
    const size = document.querySelector(sizeSelector);
    const material = document.querySelector(materialSelector);
    const options = document.querySelector(optionsSelector);
    const promocode = document.querySelector(promocodeSelector);
    let price = 0;
    disabledBtn = document.querySelector(btnSelector);
    disabledBtn.disabled = true;
    result = document.querySelector(resultSelector);

    function calcPrice(e) {
        price = Math.round((+size.value) * (+material.value) + (+options.value)); 

        if (size.value === '' || material.value === '') {
            result.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
            disabledBtn.disabled = true;
        } else if (promocode.value === 'IWANTPOPART') {
            result.textContent = Math.round(price * 0.7);
            disabledBtn.disabled = false;
        } else {
            result.textContent = price;
            disabledBtn.disabled = false;
        }

        getFormCalcData(e.target, formCalcData, price);
    }

    size.addEventListener('change', calcPrice);
    material.addEventListener('change', calcPrice);
    options.addEventListener('change', calcPrice);
    promocode.addEventListener('input', calcPrice);
};

export default calc;
export {result, disabledBtn};
