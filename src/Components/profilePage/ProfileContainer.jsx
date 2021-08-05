import React from 'react';
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        //debugger;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '18796';//Add Id loggined user
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <ProfilePage {...this.props} profile={this.props.profile}/>
        )
    };
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapStateToProps,{getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);



