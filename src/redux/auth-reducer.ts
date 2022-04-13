import { stopSubmit } from "redux-form";
import { TypeOfTag } from "typescript";
import { authAPI, securityAPI } from "../api/api";
import { CaptchaResultCodeEnum, ResultCodeEnum } from "../types/types";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

type InitialStateType2 = {
    userId: number|null,
    email: string|null,
    login: string|null,
    isAuth: boolean,
    captchaUrl: string|null // if null, then captcha is not required
}

let initialState = {
    userId: null as number|null,
    email: null as string|null,
    login: null as string|null,
    isAuth: false as boolean,
    captchaUrl: null as string|null // if null, then captcha is not required
}

export type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action:any):InitialStateType => {
    switch(action.type){
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
        }
}

type SetAuthUserDataActionPayloadType = {
    userId:number|null
    email:string|null
    login:string|null
    isAuth:boolean
};
type SetAuthUserDataActionType = {type: typeof SET_USER_DATA, payload: SetAuthUserDataActionPayloadType}
export const setAuthUserData = (userId:number|null, email:string|null, login:string|null, isAuth:boolean):SetAuthUserDataActionType => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

type GetcaptchaUrlSuccessType = {type: typeof GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl:string}}
export const getcaptchaUrlSuccess = (captchaUrl:string):GetcaptchaUrlSuccessType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export const getAuthUserData = () => async (dispatch: any) => {
    let meData = await authAPI.authMe()
    

    if(meData.resultCode === ResultCodeEnum.Success){
      let {id, email, login} = meData.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email:string, password:string, rememberMe:boolean, captcha:string) => async (dispatch:any) => {
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

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getcaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if(response.data.resultCode === 0){
       dispatch(setAuthUserData(null, null, null, false));
    }
}



export default authReducer;