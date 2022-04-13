import css from './FormsControls.module.css'
import { FC, ReactNode } from 'react';
import { WrappedFieldProps } from 'redux-form';

export const Textarea: FC<WrappedFieldProps> = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={css.formControl + " " + (hasError ? css.error : "")}>
            <textarea {...input} {...props}></textarea>
            {hasError && <span>{error}</span>}
        </div>
    )
}
export const Input: FC<WrappedFieldProps> = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={css.formControl + " " + (hasError ? css.error : "")}>
            <input {...input} {...props}></input>
            {hasError && <span>{error}</span>}
        </div>
    )
}