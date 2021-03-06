import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogs-reducer";
import sidebarReduser from "./sidebar-reducer";

const ADD_POST = 'lm-network/store/ADD_POST';
const UPD_NEW_POST_TEXT = 'lm-network/store/UPD_NEW_POST_TEXT';
const ADD_MSG = 'lm-network/store/ADD_MSG';
const UPD_NEW_MSG_BODY = 'lm-network/store/UPD_NEW_MSG_BODY';

//-Start store-----------------------------
let store = {
    _state: {
        profilePage: {
            dataPosts: [
                {id: '1', message: 'hi Data', name: 'alik1', age: 15, likesCount: 15},
                {id: '2', message: 'How are You', name: 'alik2', age: 156, likesCount: 5},
                {id: '3', message: 'I\'m a best react production', name: 'alik3', age: 157, likesCount: 3},
                {id: '4', message: 'I\'m a best react production1', name: 'alik4', age: 158, likesCount: 7},
                {id: '5', message: 'I\'m a best react production4', name: 'alik5', age: 159, likesCount: 6}
            ],
            newPostText: 'mvstudio.by'
        },
        dialogPage: {
            dataDialogs: [
                {id: '1', name: 'Leonid1 from data.jsx'},
                {id: '2', name: 'Alexey props'},
                {id: '3', name: 'Diana'},
                {id: '4', name: 'Bob'},
                {id: '5', name: 'Scruge'}
            ],
            dataMsgs: [
                {id: '1', message: 'Js Hi'},
                {id: '2', message: 'i\'s me'},
                {id: '3', message: 'I best by React'},
                {id: '4', message: 'and me'}
            ],
            newMsgBody: ''
        },
        sidebar: {},
    },
    _callSubscriber: function () {
        console.log('STate changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { //{type: 'ADD_POST'}
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.dialogPage = dialogsReduser(this._state.dialogPage, action)
        this._state.sidebar = sidebarReduser(this._state.sidebar, action)

        this._callSubscriber(this._state);


    }
}
//-----end store----------------------

export const addPostAC = () => ({type: ADD_POST})
export const onPostChangeAC = (text) => {
    return {type: UPD_NEW_POST_TEXT, newText: text}
}

export const addMsgAC = () => ({type: ADD_MSG})
export const onMsgChangeAC = (body) => {
    return {type: UPD_NEW_MSG_BODY, newBody: body}
}
window.store = store;


export default store;
