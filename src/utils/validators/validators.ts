export type FieldValidatorType = (value:string) => string | undefined

export const requiredField: FieldValidatorType = value => {
    if (value) return undefined;
    return 'Field is required';
}


//call inside variable(let, const) outside the validate={} attr
export const maxLengthCreator = (maxLength:number): FieldValidatorType => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength}`;
    return undefined;
}