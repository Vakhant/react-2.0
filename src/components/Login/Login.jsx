import { React } from 'react';
import { Field, reduxForm } from "redux-form"


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <Field component={'input'} name={'login'} type="text" placeholder="Login"/>
            <Field component={'input'} name={'password'} type="text" placeholder="Password"/>
            <Field component={'input'} name={'rememberMe'} type="checkbox" placeholder=""/><label htmlFor="">remember me</label>
            <button>Login</button>
        </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}




export default Login;