import * as axios from "axios";


export const getUsers = (currentUsersPage = 1, pageSize = 5) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentUsersPage}&count=${pageSize}`,
        {
            withCredentials: true
        }).then(response => {
        return response.data
    });
}

export const authMe = () => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
    })
}
export const setFollow = (userId) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
        {withCredentials: true,
            headers: {
                'API-KEY': 'c6219d09-5e75-4960-a712-f22172abf4fd'
            }
        }
    )
}
export const setUnfollow = (userId) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {withCredentials: true,
            headers: {
                'API-KEY': 'c6219d09-5e75-4960-a712-f22172abf4fd'
            }
        }
    )
}

