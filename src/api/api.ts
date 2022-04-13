import axios from "axios";
import { CaptchaResultCodeEnum, ProfileType, ResultCodeEnum } from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2fc274f6-5c86-48e9-aa6f-8e920b316173",
    }

})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    follow(userId:number){
        return instance.post(`follow/${userId}`, {withCredentials: true})
    },
    unfollow(userId:number){
        return instance.delete(`follow/${userId}`, {withCredentials: true})
    }
    //console.warn()
}

export const profileAPI = {
    getProfile(userId:number){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId:number){
        return instance.get(`profile/status/${userId}`)
    },
    updateProfile(status:string){
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photo:any){
        const formData = new FormData();
        formData.append("image", photo)
        return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveProfile(profile: ProfileType){
        return instance.put(`profile`, profile)
    }
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        id: number
    }
    resultCode: ResultCodeEnum | CaptchaResultCodeEnum
    messages: Array<string>
}

export const authAPI = {
    authMe() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
    },
    login(email:string, password:string, rememberMe:boolean=false, captcha:string|null = null){
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data)
    },
    logout(){   
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrl: () => {
        return instance.get(`security/get-captcha-url`)
    }
}