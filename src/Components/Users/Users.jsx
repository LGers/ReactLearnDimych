import React from "react";
import UserItem from "./UserItem/UserItem";
import st from './Users.module.css';
import * as axios from "axios";
import userPhotoDefault from '../../assets/img/default-user-icon-15.jpg'

class Users extends React.Component {

    constructor(props) {
        super(props);
        alert('new')
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });

    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
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
                                    this.props.unFollowClick(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.followClick(u.id)
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

}

export default Users;