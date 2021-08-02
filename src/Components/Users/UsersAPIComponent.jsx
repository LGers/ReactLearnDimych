// import React from "react";
// import * as axios from "axios";
// import Users from "./Users";
//
// class UsersAPIComponent extends React.Component {
//
//
//     componentDidMount() {
//
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentUsersPage}&count=${this.props.pageSize}`).then(response => {
//             this.props.setUsers(response.data.items);
//             this.props.setUsersTotalCount(response.data.totalCount);
//         });
//     }
//
//     onPageChanged = (pageNumber) => {
//         this.props.setCurrentPage(pageNumber)
//
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
//             this.props.setUsers(response.data.items)
//         });
//     }
//
//     render() {
//         let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
//         let pages = [];
//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i);
//         }
//
//         return <Users
//             totalUsersCount={this.props.totalUsersCount}
//             pageSize={this.props.pageSize}
//             currentUsersPage={this.props.currentUsersPage}
//             onPageChanged={this.onPageChanged}
//             users={this.props.users}
//             followClick={this.props.followClick}
//             unfollowClick={this.props.unfollowClick}
//
//         />
//     }
// }
//
// export default UsersAPIComponent;