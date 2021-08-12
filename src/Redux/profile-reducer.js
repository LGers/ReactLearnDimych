import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'lm-network/profile/ADD_POST';
const DELETE_POST = 'lm-network/profile/DELETE_POST';
const SET_USER_PROFILE = 'lm-network/profile/SET_USER_PROFILE';
const SET_STATUS = 'lm-network/profile/SET_STATUS';

let initialState = {
    dataPosts: [
        {id: '1', message: 'hi Data', name: 'alik1', age: 15, likesCount: 15},
        {id: '2', message: 'How are You', name: 'alik2', age: 156, likesCount: 5},
        {id: '3', message: 'I\'m a best react production', name: 'alik3', age: 157, likesCount: 3},
        {id: '4', message: 'I\'m a best react production1', name: 'alik4', age: 158, likesCount: 7},
        {id: '5', message: 'I\'m a best react production4', name: 'alik5', age: 159, likesCount: 6}
    ],
    newPostText: 'mvstudio.by',
    profile: null,
};

const profileReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let lastIdNumber = state.dataPosts.length - 1;
            let newId = String(Number(state.dataPosts[lastIdNumber].id) + 1)
            let newPost = {
                id: newId,
                message: action.newMsg,
                name: 'alik id5 added',//change name function
                age: 1000,
                likesCount: 0
            };
            return {
                ...state,
                dataPosts: [...state.dataPosts, newPost],
            }
        }
        case DELETE_POST: {
            let lastIdNumber = state.dataPosts.length - 1;
            let newId = String(Number(state.dataPosts[lastIdNumber].id) + 1)
            let newPost = {
                id: newId,
                message: action.newMsg,
                name: 'alik id5 added',//change name function
                age: 1000,
                likesCount: 0
            };
            return {
                ...state,
                dataPosts: state.dataPosts.filter(p => p.id != action.postId),
            }
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }

        default:
            return state;
    }
}

export const addPostAC = (newMsg) => ({type: ADD_POST, newMsg: newMsg})
export const deletePostAC = (postId) => ({type: DELETE_POST, postId: postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

//THUNKs
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));

}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {

    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
    // else {
    //     //обработчик ошибок
    // }
}


/*export const updNewPostText = (text) => { // delete This
    return (dispatch) => {
            dispatch(updNewPostTextAC(text))
    }
}*/

export const addPost = (postBody) => (dispatch) => dispatch(addPostAC(postBody))
export const _addPost = (postBody) => { //that's seme how higher string
    return (dispatch) => {
        dispatch(addPostAC(postBody))
    }
}



export default profileReduser;