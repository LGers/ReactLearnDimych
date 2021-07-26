import {rerenderEntireTree} from "./../../render"

let state = {
    profilePage: {
        dataPosts: [
            {id: '1', message: 'hi Data', name: 'alik1', age: 15, likesCount: 15},
            {id: '2', message: 'How are You', name: 'alik2', age: 156, likesCount: 5},
            {id: '3', message: 'I\'m a best react production', name: 'alik3', age: 157, likesCount: 3},
            {id: '4', message: 'I\'m a best react production1', name: 'alik4', age: 158, likesCount: 7},
            {id: '5', message: 'I\'m a best react production4', name: 'alik5', age: 159, likesCount: 6}
        ]
    },

    dialogPage:{
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
    sidebar:{}
}

export let addPost = (postMessage) => {
    //debugger;
    let newPost = {
        id: '0',
        message: postMessage,
        name: 'alik id5 added',
        age: 1000,
        likesCount: 0

    };

    state.profilePage.dataPosts.push(newPost);
    rerenderEntireTree(state);
    console.log(state);
};

export let updTextArea = (postMessage) => {
    let currentTextArea=postMessage;
    rerenderEntireTree(state);
    alert(postMessage)
}

export default state;
//export {};