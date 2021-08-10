import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
    setCurrentPage, followClick, unfollowClick,requestUsers
} from '../../Redux/users-reducer';
import Preloader from "../common/preloader/Preloader";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentUserPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../Redux/users-selectors";

class UsersAPIContainer extends React.Component { //----- !!! UsersContainer by Dimych


    componentDidMount() {
        let currentPage = this.props.match.params.currentPage;
        if (!currentPage) {
            currentPage = this.props.currentUsersPage;
        }
        this.props.requestUsers(currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentUsersPage={this.props.currentUsersPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                unfollowClick={this.props.unfollowClick}
                followClick={this.props.followClick}

            />
        </>
    }
}


// let mapStateToProps=(state)=>{
//
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentUsersPage: state.usersPage.currentUsersPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

let mapStateToProps=(state)=>{

    return {
        // users: getUsers(state),
        users: getUsers(state),

        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentUsersPage: getCurrentUserPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {unfollowClick, followClick, setCurrentPage, requestUsers}),
    withRouter
    //withAuthRedirect
)(UsersAPIContainer)