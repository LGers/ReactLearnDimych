import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
    followSucces,
    unfollowSucces,
    setCurrentPage,
    setUsers,
    setTotalUsersCount, toggleIsFetching, toggleFollowingProgress,
    getUsersPageThunkCreator,
    getUsers, followClick, unfollowClick
} from '../../Redux/users-reducer';
import Preloader from "../common/preloader/Preloader";
import {withRouter} from "react-router-dom";

class UsersAPIContainer extends React.Component { //----- !!! UsersContainer by Dimych


    componentDidMount() {
        let currentPage = this.props.match.params.currentPage;
        if (!currentPage) {
            currentPage = this.props.currentUsersPage;
        }
        //this.props.getUsers(this.props.currentUsersPage, this.props.pageSize);
        this.props.getUsers(currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                //{...this.props}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentUsersPage={this.props.currentUsersPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                // followSucces={this.props.follow}
                // unfollowSucces={this.props.unfollow}
                //toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
                unfollowClick={this.props.unfollowClick}
                followClick={this.props.followClick}

            />
        </>
    }
}

let mapStateToProps=(state)=>{

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentUsersPage: state.usersPage.currentUsersPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
let WithUrlDataContainerComponent = withRouter(UsersAPIContainer); //path users/3/ - dont display!!!???

// const UsersContainer = connect(mapStateToProps,
export default UsersAPIContainer = connect(mapStateToProps,
    {
        unfollowClick,
        followClick,
        // followSucces,
        // unfollowSucces,
        //toggleFollowingProgress,//???? may be commented
        //setTotalUsersCount,
        //toggleIsFetching,
        //setUsers,
        setCurrentPage, // may be commented
        // getUsers: getUsersThunkCreator,
        getUsers
        //setPage:getUsersPageThunkCreator
    // })(UsersAPIContainer); //UsersContainer by Dimych
    })(WithUrlDataContainerComponent); //UsersContainer by Dimych

//export default UsersContainer;