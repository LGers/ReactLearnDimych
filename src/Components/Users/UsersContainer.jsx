import React from "react";
//import UsersAPIComponent from "./UsersAPIComponent";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    unfollowAC,
    setUsersTotalCountAC
} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersAPIContainer extends React.Component { // !!! UsersContainer by Dimych


    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentUsersPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentUsersPage={this.props.currentUsersPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            followClick={this.props.followClick}
            unfollowClick={this.props.unfollowClick}

        />
    }
}

let mapStateToProps=(state)=>{

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentUsersPage: state.usersPage.currentUsersPage
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        followClick: (userId) => {
            dispatch(followAC(userId));
        },
        unfollowClick: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNunber) => {
            dispatch(setCurrentPageAC(pageNunber));
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer); //UsersContainer by Dimych
export default UsersContainer;