import React from 'react'
import Paginator from "../Paginator/Paginator";
import User from "./User";

let Users = ({currentUsersPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    // let pagesCount = Math.ceil(totalUsersCount / pageSize);
    // let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i);
    // }
// debugger
    return (
        <div>
            {/*Paginator component ↓↓↓↓↓ */}
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       onPageChanged={onPageChanged}
                       currentUsersPage={currentUsersPage}
            />
            {
                users.map(u =>
                    <User
                        user={u}
                        followingInProgress={props.followingInProgress}
                        key={u.id}
                        unfollowClick={props.unfollowClick}
                        followClick={props.followClick}
                        key={u.id}
                    />
                )
            }
        </div>
    )
}
export default Users;
{/*
            <div key={u.id}>//---
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
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
                            <div>{'Country'}</div>
                            <div>{'City'}</div>
                        </span>
                    </span>
                </div>)
                //User----
            }
       </div>
       */}

