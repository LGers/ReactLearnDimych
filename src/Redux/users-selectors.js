
export const getUsers=(state)=>{
    return state.usersPage.users;
}
export const getPageSize=(state)=>{
    return state.usersPage.pageSize;
}
export const getTotalUsersCount=(state)=>{
    return state.usersPage.totalUsersCount;
}
export const getCurrentUserPage=(state)=>{
    return state.usersPage.currentUserPage;
}
export const getIsFetching=(state)=>{
    return state.usersPage.isFetching;
}
export const getFollowingInProgress=(state)=>{
    return state.usersPage.followingInProgress;
}