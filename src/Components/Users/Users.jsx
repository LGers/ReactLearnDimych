import React from "react";
import UserItem from "./UserItem/UserItem";
import st from './Users.module.css';
import * as axios from "axios";
import userPhotoDefault from '../../assets/img/default-user-icon-15.jpg'


let Users = (props) => {

    let getUsers = () => {
        if (props.users.length===0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
        }
    }


    let usersEl = props.users.map(u => <UserItem
        idItem={u.id}
        name={u.name}
        key={u.id}
        status={u.status}
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