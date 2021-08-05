import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount, toggleIsFetching, toggleFollowingProgress
} from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersAPIContainer extends React.Component { //----- !!! UsersContainer by Dimych


    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentUsersPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentUsersPage={this.props.currentUsersPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}

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
const UsersContainer = connect(mapStateToProps,
    {
        follow, unfollow, setUsers,
        setCurrentPage, setTotalUsersCount, toggleIsFetching,
        toggleFollowingProgress
    })(UsersAPIContainer); //UsersContainer by Dimych
export default UsersContainer;