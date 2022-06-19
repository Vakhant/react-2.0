import { instance } from "./api";

type GetcaptchaUrlResponseType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl: () => {
        return instance.get<GetcaptchaUrlResponseType>(`security/get-captcha-url`).then(res=>res.data)
    }
}