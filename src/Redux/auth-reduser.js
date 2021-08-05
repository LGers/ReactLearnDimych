import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false, // самостоятельная работа )))
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: {
            return state
        }
    }
}

export const setAuthUserData = (userId, email,login) => ({type: SET_USER_DATA, data:{userId, email,login}})

//thunk s
export const authMe=()=> {
    return (dispatch)=>{
        usersAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            });
    }
}
export default authReducer;