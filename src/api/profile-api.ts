import { instance, APIResponseType } from './api';
import { PhotosType, ProfileType } from "../types/types";

type SavePhotoRedponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(userId:number){
        
        return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data)
    },
    getStatus(userId:number){
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateProfile(status:string){
        return instance.put<APIResponseType>(`profile/status`, {status}).then(res => res.data)
    },
    savePhoto(photo:File){
        const formData = new FormData();
        formData.append("image", photo)
        return instance.put<APIResponseType<SavePhotoRedponseDataType>>(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(res => res.data)
    },
    saveProfile(profile: ProfileType){
        return instance.put<APIResponseType>(`profile`, profile).then(res => res.data)
    }
}