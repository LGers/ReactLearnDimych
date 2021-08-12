import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./profilePosts/MyPostsContainer";
//import Redirect from "react-router-dom/es/Redirect";
import React from "react";
//import Redirect from "react-router-dom/es/Redirect";

const ProfilePage = (props) => {
    //if (props.isAuth===false)return <Redirect to={"/login"}/>
    console.log('RENDER Profile')
    return (
        <div>
            <ProfileInfo
                profile = {props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
        </div>
    )
};

export default ProfilePage;