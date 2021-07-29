import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, updNewPostTextAC} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
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