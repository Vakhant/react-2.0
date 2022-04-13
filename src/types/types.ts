
export type ContactsType = {
    github: string|null
    vk: string|null
    facebook: string|null
    instagram: string|null
    twitter: string|null
    website: string|null
    youtube: string|null
    mainLink: string|null
}
export type PhotosType = {
    small: string|null
    large: string|null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
export type PostType = {
    id: number
    likeCounts: number
    message: string
}
export type UserType = {
    "id": number
    "name": string
    "photos": PhotosType
    "status": null,
    "followed": boolean
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}
export enum CaptchaResultCodeEnum {
    CaptchaIsRequired = 10
}