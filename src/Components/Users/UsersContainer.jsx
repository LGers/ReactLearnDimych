import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount, toggleIsFetching
} from '../../Redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";

class UsersAPIContainer extends React.Component { //----- !!! UsersContainer by Dimych


    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentUsersPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
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
        isFetching: state.usersPage.isFetching
    }
}
const UsersContainer = connect(mapStateToProps,
    {
        follow, unfollow, setUsers,
        setCurrentPage, setTotalUsersCount, toggleIsFetching
    })(UsersAPIContainer); //UsersContainer by Dimych
export default UsersContainer;