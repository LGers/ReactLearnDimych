const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
        users: [
            // {
            //     id: '1',
            //     followed: false,
            //     fullName: 'Leonid M',
            //     status: 'I\'m a boss',
            //     location: {country: 'Belarus', city: 'Boro-Boro'},
            //     photoUrl:'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg'
            // },
            // {
            //     id: '2',
            //     followed: true,
            //     fullName: 'anna',
            //     status: 'I\'m a boss',
            //     location: {country: 'Russia', city: 'Moskow'},
            //     photoUrl:'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg'
            // },
            // {
            //     id: '3',
            //     followed: false,
            //     fullName: 'John',
            //     status: 'I\'m a boss',
            //     location: {country: 'Giorgia', city: 'Pellopones'},
            //     photoUrl:'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg'
            // },
            // {
            //     id: '4',
            //     followed: false,
            //     fullName: 'Olga',
            //     status: 'I\'m a boss',
            //     location: {country: 'Belarus', city: 'Boro'},
            //     photoUrl:'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg'
            // },
            // {
            //     id: '5',
            //     followed: true,
            //     fullName: 'Igor',
            //     status: 'I m a boss',
            //     location: {country: 'Ukraine', city: 'Kiev'},
            //     photoUrl:'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg'
            // }
        ]
    }

;

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            //------------------------------------------------
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
            //------------------------------------------------
        }

        case UNFOLLOW: {
            //------------------------------------------------
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
            //-----------------------------------------------
        }
        case SET_USERS:{
            return     {...state, users: [...state.users,...action.users]}
            // return     {...state, users: action.users}
        };

        default: {
            return state
        }


    }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;