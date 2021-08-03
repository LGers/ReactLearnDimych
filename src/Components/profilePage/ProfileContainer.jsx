import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./profilePosts/MyPostsContainer";
import ProfilePage from "./ProfilePage";
import * as axios from "axios";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../Redux/users-reducer";
import {setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        //debugger;

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId//${this.props.id}`).then(response => {
            // axios.get(`https://social-network.samuraijs.com/api/1.0/${window.location.pathname}`
        ).then(response => {
            //debugger
            console.log(window.location.pathname);
            console.log(this.props);
            this.props.setUserProfile(response.data);
        });
    }

    render() {

        return (
            <ProfilePage {...this.props} profile={this.props.profile}/>
        )
    };
}

let mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile

    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default ProfileContainer = connect(mapStateToProps,
    {
        setUserProfile//, addPost:addPostAC, updNewPostText:updNewPostTextAC
    })(WithUrlDataContainerComponent);
