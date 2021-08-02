import React from "react";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    unFollowAC,
    setUsersTotalCountAC
} from "../../Redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";

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
        unFollowClick: (userId) => {
            dispatch(unFollowAC(userId));
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(Users);