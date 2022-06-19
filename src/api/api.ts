import axios from "axios";
import { UserType } from '../types/types';


export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}
export enum CaptchaResultCodeEnum {
    CaptchaIsRequired = 10
}

export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
    data:D
    messages: Array<string>
    resultCode: RC
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string|null
}

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2fc274f6-5c86-48e9-aa6f-8e920b316173",
    }
})