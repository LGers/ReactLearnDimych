import React from 'react';
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        //debugger;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '18796';//Add Id loggined user
            //userId = '2';//Add Id loggined user
        }
        this.props.getUserProfile(userId);
        // setTimeout(()=>{
            this.props.getStatus(userId)
        // },1000)

    }

    render() {
        return (
            <ProfilePage
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    };
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);



