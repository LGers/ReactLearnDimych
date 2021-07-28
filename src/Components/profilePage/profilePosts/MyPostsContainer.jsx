import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updNewPostTextAC} from "../../../Redux/profile-reducer";


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostAC())
        // store.dispatch(addPostAC())
    }

    let onPostChange = (text) => {
        let action = updNewPostTextAC(text);
        props.store.dispatch(action)
    }

    return <MyPosts
        addPost={addPost}
        updNewPostText={onPostChange}
        dataPostsJs={state.profilePage.dataPosts}
        newPostText={state.profilePage.newPostText}
    />
};

export default MyPostsContainer;