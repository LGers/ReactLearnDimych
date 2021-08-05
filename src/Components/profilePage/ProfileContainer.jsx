import React from 'react';
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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



// let mapStateToPropsForRedirect = (state) => {
//     return {
//         isAuth: state.auth.isAuth,
//     }
// }
//
// AuthRedirectComponent=connect(mapStateToPropsForRedirect)(AuthRedirectComponent);

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

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer) //-----HOC-----
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default ProfileContainer = connect(mapStateToProps,
//     {getUserProfile})(WithUrlDataContainerComponent);


