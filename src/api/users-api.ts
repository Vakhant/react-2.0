import { instance, GetItemsType, APIResponseType } from './api';

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId:number){
        return instance.post<APIResponseType>(`follow/${userId}`, {withCredentials: true})
    },
    unfollow(userId:number){
        return instance.delete(`follow/${userId}`, {withCredentials: true})
    }
    //console.warn()
}