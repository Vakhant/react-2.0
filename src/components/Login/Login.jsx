import { React } from 'react';
import { Field, reduxForm } from "redux-form"
import { requiredField } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <Field validate={[requiredField]} component={Input} name={'login'} type="text" placeholder="Login"/>
            <Field validate={[requiredField]} component={Input} name={'password'} type="text" placeholder="Password"/>
            <Field component={Input} name={'rememberMe'} type="checkbox" placeholder=""/><label htmlFor="">remember me</label>
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