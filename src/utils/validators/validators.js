export const requiredField = value => {
    if (value) return undefined;
    return 'Field is required';
}


//call inside variable(let, const) outside the validate={} attr
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength}`;
    return undefined;
}