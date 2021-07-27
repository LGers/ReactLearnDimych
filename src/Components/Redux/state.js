const ADD_POST = 'ADD_POST';
const UPD_NEW_POST_TEXT = 'UPD_NEW_POST_TEXT';
const UPD_NEW_POST_TEXT_TEXT = 'text';

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

    addPost() {
        let newPost = {
            id: '0',
            message: this._state.profilePage.newPostText,
            name: 'alik id5 added',
            age: 1000,
            likesCount: 0
        };
        this._state.profilePage.dataPosts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updNewPostText(postMessage) {
        this._state.profilePage.newPostText = postMessage;
        this._callSubscriber(this._state);
    },
    dispatch(action) { //{type: 'ADD_POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: '0',
                message: this._state.profilePage.newPostText,
                name: 'alik id5 added',
                age: 1000,
                likesCount: 0
            };
            this._state.profilePage.dataPosts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPD_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }
}
//-----end store----------------------

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) => {
    return {type: UPD_NEW_POST_TEXT, newText: text}
}
window.store = store;


export default store;
