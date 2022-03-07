import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4c0190ce-47fb-4f9a-bd45-f9d2b960ef3c"
    }

})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    follow(userId){
        return instance.post(`follow/${userId}`, {withCredentials: true})
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`, {withCredentials: true})
    }
    //console.warn()
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateProfile(status){
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photo){
        const formData = new FormData();
        formData.append("image", photo)
        return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveProfile(profile){
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    authMe: () => {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe=false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}