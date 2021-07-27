const ADD_POST = 'ADD_POST';
const UPD_NEW_POST_TEXT = 'UPD_NEW_POST_TEXT';

const profileReduser = (state, action) => {

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
export default profileReduser;