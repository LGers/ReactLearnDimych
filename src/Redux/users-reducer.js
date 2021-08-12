import {authAPI, usersAPI} from "../api/api";
import {updateObjectInArray} from "../Utils/objects-helpers";

const FOLLOW = 'lm-network/users/FOLLOW';
const UNFOLLOW = 'lm-network/users/UNFOLLOW';
const SET_USERS = 'lm-network/users/SET_USERS';
const SET_CURRENT_PAGE = 'lm-network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'lm-network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'lm-network/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'lm-network/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentUsersPage: 1,
    isFetching: false,
    followingInProgress: []
};

const followUnfollowUserAction = (state, userId, isFollowed) => {
    return {
        ...state,
        users: state.users.map(u => {
            if (u.id === userId) {
                return {...u, followed: isFollowed}
            }
            return u;
        })
    }
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                //     users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u;
                // })
            }
        }


        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: false}
                //     }
                //     return u;
                // })
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentUsersPage: action.currentUsersPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default: {
            return state
        }
    }
}

//ActionCreators
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSucces = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentUsersPage) => ({type: SET_CURRENT_PAGE, currentUsersPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId
})

//thunk s

export const requestUsers = (currentUsersPage, pageSize) => async (dispatch) => {

    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentUsersPage))//--->add className to selected page of users
    let data = await usersAPI.getUsers(currentUsersPage, pageSize)
    // .then(data => {
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    // });
}


//-----> getUsersPageThunkCreator not using/ it's work same getUsersThunkCreator
export const getUsersPageThunkCreator = (pageNumber, pageSize) => async (dispatch) => {

    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(pageNumber)) //--->add className to selected page of users

    let data = await usersAPI.getUsers(pageNumber, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreatorMethod) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreatorMethod(userId));
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const unfollowClick = (userId) => async (dispatch) => {
        //let apiMethod = usersAPI.setUnfollow.bind(usersAPI);
        //let actionCreatorMethod = unfollowSucces;
        followUnfollowFlow(dispatch, userId, usersAPI.setUnfollow.bind(usersAPI), unfollowSucces);
        // followUnfollowFlow(dispatch, userId, apiMethod, unfollowSucces);

        /*dispatch(toggleFollowingProgress(true, userId));
        let response = await apiMethod(userId)
        if (response.data.resultCode == 0) {
            dispatch(actionCreatorMethod(userId));
        }
        dispatch(toggleFollowingProgress(false, userId))
    */
}

export const followClick = (userId) => async (dispatch) => {
    // let apiMethod = usersAPI.setFollow.bind(usersAPI);
    // let actionCreatorMethod = followSucces;

    followUnfollowFlow(dispatch, userId, usersAPI.setFollow.bind(usersAPI), followSuccess);
/*
        dispatch(toggleFollowingProgress(true, userId))
        let response = await apiMethod(userId)
        if (response.data.resultCode == 0) {
            dispatch(actionCreatorMethod(userId));
        }
        dispatch(toggleFollowingProgress(false, userId))
*/
}


export default usersReducer;