import {usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPD_NEW_POST_TEXT = 'UPD_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
            let newPost = {
                id: '0',
                message: state.newPostText,
                name: 'alik id5 added',
                age: 1000,
                likesCount: 0
            };
            return {
                ...state,
                dataPosts: [...state.dataPosts, newPost],
                newPostText: ''
            }
        }
        case UPD_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }

        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updNewPostTextAC = (text) => ({type: UPD_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})

//THUNKs
export const getUserProfile =(userId)=>{
    return (dispatch)=>{
        usersAPI.getProfile(userId)
            .then(response => {
                console.log(window.location.pathname);
                dispatch(setUserProfile(response.data));
            });
    }
}
export default profileReduser;