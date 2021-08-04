import React from 'react'
import Header from "./Header";
import * as axios from "axios";
import {setUsers} from "../../Redux/users-reducer";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reduser";
import {authMe, usersAPI} from "../../api/api";

//debugger

class HeaderContainer extends React.Component {

    componentDidMount() {
        //debugger
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })*/
        usersAPI.authMe()
            .then(response => {
                // debugger
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
                //this.props.toggleIsFetching(false)
                //this.props.setAuth(response.match);
                //this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {
        return <Header {...this.props}/>

    }
};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderContainer);