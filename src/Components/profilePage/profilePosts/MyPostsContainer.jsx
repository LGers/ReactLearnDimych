import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updNewPostTextAC} from "../../../Redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    //let state = props.store.getState();



    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostAC())
                    // store.dispatch(addPostAC())
                }

                let onPostChange = (text) => {
                    let action = updNewPostTextAC(text);
                    store.dispatch(action)
                }

                return (<MyPosts
                    addPost={addPost}
                    updNewPostText={onPostChange}
                    dataPostsJs={state.profilePage.dataPosts}
                    newPostText={state.profilePage.newPostText}
                />)
            }
        }
        </StoreContext.Consumer>
    );

};

export default MyPostsContainer;