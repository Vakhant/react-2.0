import css from './FormsControls.module.css'

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={css.formControl + " " + (hasError ? css.error : "")}>
            <textarea {...input} {...props}></textarea>
            {hasError && <span>{error}</span>}
        </div>
    )
}
export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={css.formControl + " " + (hasError ? css.error : "")}>
            <input {...input} {...props}></input>
            {hasError && <span>{error}</span>}
        </div>
    )
}