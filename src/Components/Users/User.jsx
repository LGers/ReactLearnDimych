import React from 'react'
import st from "./Users.module.css";
import userPhotoDefault from "../../assets/img/default-user-icon-15.jpg";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollowClick, followClick}) => {

    return (
    <div >
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={st.avaPhoto} src={
                                    user.photos.small != null
                                        ? user.photos.small
                                        : userPhotoDefault}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {unfollowClick(user.id)
                                          }}>Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {followClick(user.id)
                                          }}>Follow</button>
                            }
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'Country'}</div>
                            <div>{'City'}</div>
                        </span>
                    </span>
        </div>
    )
}

export default User;