import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c6219d09-5e75-4960-a712-f22172abf4fd'
    }
})

export const usersAPI = {
    getUsers(currentUsersPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentUsersPage}&count=${pageSize}`,
        ).then(response => {
            return response.data
        });
    },
    setFollow(userId) {
        return instance.post(`follow/${userId}`, {})
    },
    setUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

