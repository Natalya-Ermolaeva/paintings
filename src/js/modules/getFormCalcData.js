const getFormCalcData = (elem, formCalcData, price) => {
    if (elem.nodeName === 'SELECT') {
        formCalcData[elem.getAttribute(['id'])] = elem.options[elem.selectedIndex].text;
    } else {
        formCalcData[elem.className] = elem.value;
    }
    formCalcData['price'] = price;
};

export default getFormCalcData;
