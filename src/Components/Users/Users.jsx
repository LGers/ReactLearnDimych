import React from "react";
import UserItem from "./UserItem/UserItem";
import st from './Users.module.css';
import {setUsersAC} from "../../Redux/users-reducer";


let Users = (props) => {
    // axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //     props.setUsers(
    //         [
    //             {
    //                 id: '1',
    //                 followed: false,
    //                 fullName: 'Leonid M',
    //                 status: 'I\'m a boss',
    //                 location: {country: 'Belarus', city: 'Boro-Boro'},
    //                 photoUrl: 'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg'
    //             },
    //             {
    //                 id: '2',
    //                 followed: true,
    //                 fullName: 'anna',
    //                 status: 'I\'m a boss',
    //                 location: {country: 'Russia', city: 'Moskow'},
    //                 photoUrl: 'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg'
    //             },
    //             {
    //                 id: '3',
    //                 followed: false,
    //                 fullName: 'John',
    //                 status: 'I\'m a boss',
    //                 location: {country: 'Giorgia', city: 'Pellopones'},
    //                 photoUrl: 'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg'
    //             },
    //             {
    //                 id: '4',
    //                 followed: false,
    //                 fullName: 'Olga',
    //                 status: 'I\'m a boss',
    //                 location: {country: 'Belarus', city: 'Boro'},
    //                 photoUrl: 'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg'
    //             },
    //             {
    //                 id: '5',
    //                 followed: true,
    //                 fullName: 'Igor',
    //                 status: 'I m a boss',
    //                 location: {country: 'Ukraine', city: 'Kiev'},
    //                 photoUrl: 'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg'
    //             }
    //         ]
    //     )
    // });

    if (props.users.length === 0) {
        debugger
        props.setUsers([
            {
                id: '1',
                followed: false,
                fullName: 'Leonid M',
                status: 'I\'m a boss',
                location: {country: 'Belarus', city: 'Boro-Boro'},
                photoUrl: 'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg'
            },
            {
                id: '2',
                followed: true,
                fullName: 'anna',
                status: 'I\'m a boss',
                location: {country: 'Russia', city: 'Moskow'},
                photoUrl: 'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg'
            },
            {
                id: '3',
                followed: false,
                fullName: 'John',
                status: 'I\'m a boss',
                location: {country: 'Giorgia', city: 'Pellopones'},
                photoUrl: 'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg'
            },
            {
                id: '4',
                followed: false,
                fullName: 'Olga',
                status: 'I\'m a boss',
                location: {country: 'Belarus', city: 'Boro'},
                photoUrl: 'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg'
            },
            {
                id: '5',
                followed: true,
                fullName: 'Igor',
                status: 'I m a boss',
                location: {country: 'Ukraine', city: 'Kiev'},
                photoUrl: 'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg'
            }
        ])
    }


    let usersEl = props.users.map(u => <UserItem
        idItem={u.id}
        name={u.fullName}
        key={u.id}
        status={u.status}
        location={u.location}
        photoUrl={u.photoUrl}
        followed={u.followed}
    />)
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={st.avaPhoto} src={u.photoUrl}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unFollowClick(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.followClick(u.id)
                                }}>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>


    )


}
export default Users;