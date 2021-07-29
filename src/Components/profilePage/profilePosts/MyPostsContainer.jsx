import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updNewPostTextAC} from "../../../Redux/profile-reducer";
import {addMessageAC, updNewMessageBodyAC} from "../../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";
//import _StoreContext from "../../../_to_del/_StoreContext";

/*const MyPostsContainer = () => {
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

};*/

const mapStateToProps = (state) => {
    return {
        //profilePage: state.profilePage
        dataPostsJs: state.profilePage.dataPosts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updNewPostText: (text) => {
            dispatch(updNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;