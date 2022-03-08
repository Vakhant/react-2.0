import { React } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { propTypes } from 'redux-form';
import { Field, reduxForm } from "redux-form"
import { requiredField } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { login } from './../../redux/auth-reducer';


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
            <Field validate={[requiredField]} component={Input} name={'email'} type="text" placeholder="Email"/>
            <Field validate={[requiredField]} component={Input} name={'password'} type="text" placeholder="Password"/>
            <Field component={Input} name={'rememberMe'} type="checkbox" placeholder=""/><label htmlFor="">remember me</label>
            {captchaUrl && <Field validate={[requiredField]} component={Input} name={'captcha'} type="text" placeholder="captcha"/>}
            {captchaUrl && <img src={captchaUrl}/>}
            {error && <div>{error}</div>}
            <button>Login</button>
        </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl, 
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);