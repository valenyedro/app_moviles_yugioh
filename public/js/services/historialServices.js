export const saveHistorial = (historialList) => {
    localStorage.setItem('historialItems', JSON.stringify(historialList));
}

export const getHistorial = () => {
    let historialItemsList = JSON.parse(localStorage.getItem('historialItems')) || [];
    return historialItemsList;
}

export const addToHistorial = (item) => {
    let historialItemsList = getHistorial();
    const existingItem = historialItemsList.find((historialItem) => historialItem.id === item.id);
    if (existingItem === undefined){
        historialItemsList.push(item);
        saveHistorial(historialItemsList);
    }
}

export const AddItemToHistorial = (item) => {
    let historialItemsList = getHistorial();
    const existingItem = historialItemsList.find((historialItem) => historialItem.id ===  item.id);
    if(existingItem === undefined)
        addToHistorial(item);
}

export const CleanHistorial = () => {
    let historialItemsList = getHistorial();
    historialItemsList = [];
    saveHistorial(historialItemsList);
}