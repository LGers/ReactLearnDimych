import React from 'react';
import MyPosts from "./MyPosts";
import {addPost} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dataPostsJs: state.profilePage.dataPosts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;