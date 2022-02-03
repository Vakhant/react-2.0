import { React } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from "redux-form"
import { requiredField } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { login } from './../../redux/auth-reducer';


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <Field validate={[requiredField]} component={Input} name={'email'} type="text" placeholder="Email"/>
            <Field validate={[requiredField]} component={Input} name={'password'} type="text" placeholder="Password"/>
            <Field component={Input} name={'rememberMe'} type="checkbox" placeholder=""/><label htmlFor="">remember me</label>
            {props.error && <div>{props.error}</div>}
            <button>Login</button>
        </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);