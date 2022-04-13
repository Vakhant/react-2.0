import { FC } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { InjectedFormProps } from 'redux-form';
import { Field, reduxForm } from "redux-form"
import { requiredField } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

type LoginFormOwnPropsType = {
    captchaUrl: string|null
}

const LoginForm:FC<InjectedFormProps<LoginFormValuesType,LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({handleSubmit, error, captchaUrl}) => {
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

const LoginReduxForm = reduxForm<LoginFormValuesType,LoginFormOwnPropsType>({form: 'login'})(LoginForm)

type MapStateToPropsType = {
    captchaUrl: string|null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email:string, password:string, rememberMe:boolean, captcha:string) => void
}
type LoginFormValuesType = {
    email:string
    password:string
    rememberMe:boolean
    captcha:string
}
const Login:FC<MapStateToPropsType&MapDispatchPropsType> = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData:any) => {
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


const mapStateToProps = (state:AppStateType): MapStateToPropsType => ({
    captchaUrl: state.auth.captchaUrl, 
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);