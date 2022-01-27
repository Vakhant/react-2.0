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
    }
}

export const authAPI = {
    authMe: () => {
        return instance.get(`auth/me`)
    },
}