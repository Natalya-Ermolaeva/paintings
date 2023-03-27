import modals from './modules/modals';
import forms from './modules/forms';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const formCalcData = {};

    modals('.fixed-gift');
    calc('#size', '#material', '#options', '.promocode', '.calc-price', '.form-calc .button-order', formCalcData);
    forms(formCalcData);
});
