import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c6219d09-5e75-4960-a712-f22172abf4fd'
    }
})

export const usersAPI={
    getUsers(currentUsersPage = 1, pageSize = 5){
        return instance.get(`users?page=${currentUsersPage}&count=${pageSize}`,
        ).then(response => {
            return response.data
        });
    },
    authMe() {return instance.get(`auth/me`)},
    setFollow (userId) {return instance.post(`follow/${userId}`, {})},
    setUnfollow (userId) {return instance.delete(`follow/${userId}`)}
}

// export const authMe = () => {return instance.get(`auth/me`)}
// export const setFollow = (userId) => {return instance.post(`follow/${userId}`, {})}
// export const setUnfollow = (userId) => {return instance.delete(`follow/${userId}`)}

