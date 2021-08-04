import React from 'react'
import st from "./Users.module.css";
import userPhotoDefault from "../../assets/img/default-user-icon-15.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {setFollow, setUnfollow} from "../../api/api";

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
                                ? <button onClick={() => {
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    //     {
                                    //         withCredentials: true,
                                    //         headers: {
                                    //             'API-KEY': 'c6219d09-5e75-4960-a712-f22172abf4fd'
                                    //         }
                                    //     }
                                    // )
                                    setUnfollow(u.id).then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id);
                                        }
                                    });
                                }}>Unfollow</button>
                                : <button onClick={() => {

                                        // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        //     {withCredentials: true,
                                        //         headers: {
                                        //             'API-KEY': 'c6219d09-5e75-4960-a712-f22172abf4fd'
                                        //         }
                                        //     }
                                        // )
                                            setFollow(u.id).then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id);
                                            }
                                        });


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