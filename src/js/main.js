import modals from './modules/modals';
import forms from './modules/forms';
import checkTextInputs from './modules/checkTextInputs';
import phoneMask from './modules/phoneMask';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const formCalcData = {};

    modals('.fixed-gift');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    phoneMask('[name="phone"]');
    calc('#size', '#material', '#options', '.promocode', '.calc-price', '.form-calc .button-order', formCalcData);
    forms(formCalcData);
    showMoreStyles('.button-styles', '#styles .row');
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
});
