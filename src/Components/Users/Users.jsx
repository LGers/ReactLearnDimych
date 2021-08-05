import React from 'react'
import st from "./Users.module.css";
import userPhotoDefault from "../../assets/img/default-user-icon-15.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={(props.currentUsersPage === p) && st.selectedPage}
                    // return <span className={(props.currentUsersPage === p)?st.selectedPage: st.pagesPaginator}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to ={'/profile/'+ u.id}>
                                <img className={st.avaPhoto} src={
                                    u.photos.small != null
                                        ? u.photos.small
                                        : userPhotoDefault}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {props.unfollowClick(u.id)
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {props.followClick(u.id)
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