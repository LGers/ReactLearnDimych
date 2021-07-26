//import {rerenderEntireTree} from "./../../render"

let rerenderEntireTree = () => {
    console.log('STate changed')
}
//
// let state = {
//     profilePage: {
//         dataPosts: [
//             {id: '1', message: 'hi Data', name: 'alik1', age: 15, likesCount: 15},
//             {id: '2', message: 'How are You', name: 'alik2', age: 156, likesCount: 5},
//             {id: '3', message: 'I\'m a best react production', name: 'alik3', age: 157, likesCount: 3},
//             {id: '4', message: 'I\'m a best react production1', name: 'alik4', age: 158, likesCount: 7},
//             {id: '5', message: 'I\'m a best react production4', name: 'alik5', age: 159, likesCount: 6}
//         ],
//         newPostText: 'mvstudio.by'
//     },
//
//     dialogPage: {
//         dataDialogs: [
//             {id: '1', name: 'Leonid1 from data.jsx'},
//             {id: '2', name: 'Alexey props'},
//             {id: '3', name: 'Diana'},
//             {id: '4', name: 'Bob'},
//             {id: '5', name: 'Scruge'}
//         ],
//         dataMsgs: [
//             {id: '1', message: 'Js Hi'},
//             {id: '2', message: 'i\'s me'},
//             {id: '3', message: 'I best by React'},
//             {id: '4', message: 'and me'}
//         ],
//     },
//     sidebar: {}
// }
//
// window.state = state;
// export const addPost = () => {
//     let newPost = {
//         id: '0',
//         // message: postMessage,
//         message: state.profilePage.newPostText,
//         name: 'alik id5 added',
//         age: 1000,
//         likesCount: 0
//
//     };
//     state.profilePage.dataPosts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
//     console.log(state);
// };
//
// export const updNewPostText = (postMessage) => {
//     let text = postMessage;
//     state.profilePage.newPostText = text;
//     rerenderEntireTree(state);
//     ;
// }

//!!!! combine all in {store} form state--->


//------------------------------
//Start store
let store = {
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

    addPost() {
        let newPost = {
            id: '0',
            message: store.profilePage.newPostText,
            name: 'alik id5 added',
            age: 1000,
            likesCount: 0
        };
        store.profilePage.dataPosts.push(newPost);
        store.profilePage.newPostText = '';
        rerenderEntireTree(store);
        console.log(store);
    },
    updNewPostText (postMessage) {
        let text = postMessage;
        store.profilePage.newPostText = text;
        rerenderEntireTree(store);
        ;
    }

}//end store
window.store = store;
//---------------------------------
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
//export default state;
export default store;
