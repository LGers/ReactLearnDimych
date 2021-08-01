import React from "react";
import {followAC, setUsersAC, unFollowAC} from "../../Redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return {
        users: state.usersPage.users
    }

}
let mapDispatchToProps=(dispatch)=>{
    return {
        followClick: (userId)=>{
            dispatch(followAC(userId));
        },
        unFollowClick: (userId)=>{
            dispatch(unFollowAC(userId));
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users));
        },

    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(Users);