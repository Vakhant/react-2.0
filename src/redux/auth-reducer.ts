import { FormAction, stopSubmit } from "redux-form";
import { CaptchaResultCodeEnum, ResultCodeEnum } from '../api/api';
import { authAPI } from '../api/auth-api';
import { securityAPI } from '../api/security-api';
import { BaseThunkType, InferActionsTypes } from './redux-store';

let initialState = {
    userId: null as number|null,
    email: null as string|null,
    login: null as string|null,
    isAuth: false as boolean,
    captchaUrl: null as string|null // if null, then captcha is not required
}

export type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch(action.type){
        case 'sn/auth/SET_USER_DATA':
        case 'sn/auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
        }
}

export const actions = {
    setAuthUserData: (userId:number|null, email:string|null, login:string|null, isAuth:boolean) => ({type: 'sn/auth/SET_USER_DATA', payload: {userId, email, login, isAuth}} as const),
    getcaptchaUrlSuccess: (captchaUrl:string) => ({type: 'sn/auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const)
}

export const getAuthUserData = ():ThunkType => async (dispatch) => {
    let meData = await authAPI.authMe()
    

    if(meData.resultCode === ResultCodeEnum.Success){
      let {id, email, login} = meData.data;
      dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const login = (email:string, password:string, rememberMe:boolean, captcha:string):ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if(data.resultCode === ResultCodeEnum.Success){
        dispatch(getAuthUserData());
    }else{
        if(data.resultCode === CaptchaResultCodeEnum.CaptchaIsRequired){
            dispatch(getCaptchaUrl());
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const getCaptchaUrl = ():ThunkType => async (dispatch: any) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url;
    dispatch(actions.getcaptchaUrlSuccess(captchaUrl));
}

export const logout = ():ThunkType => async (dispatch: any) => {
    let response = await authAPI.logout()
    if(response.data.resultCode === 0){
       dispatch(actions.setAuthUserData(null, null, null, false));
    }
}


export default authReducer;

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>