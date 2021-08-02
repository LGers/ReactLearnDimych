import React from "react";
import UserItem from "./UserItem/UserItem";
import st from './Users.module.css';
import {setUsersAC} from "../../Redux/users-reducer";
import * as axios from "axios";
import userPhotoDefault from '../../assets/img/default-user-icon-15.jpg'


let Users = (props) => {
    // if (props.users.length===0){
    //     props.setUsers(
    //         [
    //             {
    //                 id: '1',
    //                 followed: false,
    //                 name: 'Leonid M',
    //                 status: 'I\'m a boss',
    //                 location: {country: 'Belarus', city: 'Boro-Boro'},
    //                 photoUrl:'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg',
    //                 photos:{
    //                     small:'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg',
    //                     large:''}
    //             },
    //             {
    //                 id: '2',
    //                 followed: true,
    //                 name: 'anna',
    //                 status: 'I\'m a boss',
    //                 location: {country: 'Russia', city: 'Moskow'},
    //                 photoUrl:'https://storage.ws.pho.to/s2/c89a75636028c8c12c32673b92c474162f5bba13_m.jpg',
    //                 photos:{
    //                     small:'https://storage.ws.pho.to/s2/c89a75636028c8c12c32673b92c474162f5bba13_m.jpg',
    //                     large:''}
    //             },
    //             {
    //                 id: '3',
    //                 followed: false,
    //                 name: 'John',
    //                 status: 'I\'m a boss',
    //                 location: {country: 'Giorgia', city: 'Pellopones'},
    //                 photoUrl:'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg',
    //                 photos:{
    //                     small:'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg',
    //                     large:''}
    //             },
    //             {
    //                 id: '4',
    //                 followed: false,
    //                 name: 'Olga',
    //                 status: 'I\'m a boss',
    //                 location: {country: 'Belarus', city: 'Boro'},
    //                 photoUrl:'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg',
    //                 photos:{
    //                     small:'https://icon-library.com/images/default-user-icon/default-user-icon-15.jpg',
    //                     large:''}
    //             },
    //             {
    //                 id: '5',
    //                 followed: true,
    //                 name: 'Igor',
    //                 status: 'I m a boss',
    //                 location: {country: 'Ukraine', city: 'Kiev'},
    //                 photoUrl:'https://imgv3.fotor.com/images/homepage-feature-card/Fotor-AI-photo-enhancement-tool-ru.jpg',
    //                 photos:{
    //                     small:'https://imgv3.fotor.com/images/homepage-feature-card/Fotor-AI-photo-enhancement-tool-ru.jpg',
    //                     large:''}
    //             }
    //         ]
    //     )
    // }
    let getUsers = () => {
        if (props.users.length===0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
        }
    }
    // if (props.users.length===0) {
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //         props.setUsers(response.data.items)
    //     });
    // }

    let usersEl = props.users.map(u => <UserItem
        idItem={u.id}
        name={u.name}
        key={u.id}
        status={u.status}
        //location={u.location}
        //photoUrl={u.photoUrl}
        photos={u.photos}
        followed={u.followed}
    />)

    return (
        <div>
            <button onClick={getUsers}>GetUsers</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={st.avaPhoto} src={
                                u.photos.small != null
                                    ? u.photos.small
                                    : userPhotoDefault}/>
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
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            {/*<div>{u.location.country}</div>*/}
                            <div>{'Country'}</div>
                            {/*<div>{u.location.city}</div>*/}
                            <div>{'City'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>


    )


}
export default Users;