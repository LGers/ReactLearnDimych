import React from 'react';
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        //debugger;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId);
        // usersAPI.setUserProfile(userId)
        //     .then(response => {
        //         //debugger
        //         console.log(window.location.pathname);
        //         console.log(this.props);
        //         this.props.setUserProfile(response.data);
        //     });
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
    {getUserProfile})(WithUrlDataContainerComponent);
