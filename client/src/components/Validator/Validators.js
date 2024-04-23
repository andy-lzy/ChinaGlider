
export const validateNumberInput = (e) => {
    const element = e.target;
    const min = parseInt(element.min, 10);
    const max = parseInt(element.max, 10);
    let value = parseInt(element.value, 10);

    if (value < min || value > max || isNaN(value)) {
        element.value = value < min ? min : (value > max ? max : '');
    }
}