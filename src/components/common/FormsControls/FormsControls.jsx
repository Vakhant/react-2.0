import css from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={css.formControl + " " + (hasError ? css.error : "")}>
            <textarea {...input} {...props}></textarea>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={css.formControl + " " + (hasError ? css.error : "")}>
            <input {...input} {...props}></input>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}