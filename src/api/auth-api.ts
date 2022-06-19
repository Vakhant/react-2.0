import { instance, APIResponseType, ResultCodeEnum, CaptchaResultCodeEnum } from './api';

type MeResponseDataType = {
        id: number
        email: string
        login: string
}

type LoginResponseDataType = {
        id: number
}

export const authAPI = {
    authMe() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
    },
    login(email:string, password:string, rememberMe:boolean=false, captcha:string|null = null){
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodeEnum|CaptchaResultCodeEnum>>(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data)
    },
    logout(){   
        return instance.delete(`auth/login`)
    }
}