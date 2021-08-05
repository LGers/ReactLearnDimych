import React from 'react';
import ProfilePage from "./ProfilePage";
//import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        //debugger;

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            usersAPI.setUserProfile(userId)
        .then(response => {
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
        setUserProfile
    })(WithUrlDataContainerComponent);
