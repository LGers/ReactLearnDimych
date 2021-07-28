const ADD_POST = 'ADD_POST';
const UPD_NEW_POST_TEXT = 'UPD_NEW_POST_TEXT';

let initialState = {
    dataPosts: [
        {id: '1', message: 'hi Data', name: 'alik1', age: 15, likesCount: 15},
        {id: '2', message: 'How are You', name: 'alik2', age: 156, likesCount: 5},
        {id: '3', message: 'I\'m a best react production', name: 'alik3', age: 157, likesCount: 3},
        {id: '4', message: 'I\'m a best react production1', name: 'alik4', age: 158, likesCount: 7},
        {id: '5', message: 'I\'m a best react production4', name: 'alik5', age: 159, likesCount: 6}
    ],
    newPostText: 'mvstudio.by'
};

const profileReduser = (state=initialState, action) => {
    //debugger
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: '0',
                message: state.newPostText,
                name: 'alik id5 added',
                age: 1000,
                likesCount: 0
            };
            state.dataPosts.push(newPost);
            state.newPostText = '';
            // state._callSubscriber(state._state);
            return state;
        case UPD_NEW_POST_TEXT:
            state.newPostText = action.newText;
            // state._callSubscriber(state._state);
            return state;
        default:
            return state;
    }

    //return state;
}

export const addPostAC = () => ({type: ADD_POST})
export const updNewPostTextAC = (text) =>
    ({type: UPD_NEW_POST_TEXT, newText: text })
export default profileReduser;