import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    "API-KEY": "7967410f-c0f5-4382-8f4d-5fcf4925ba63"
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {withCredentials: true}).then(response => {
            return response.data;
        })
    }
}