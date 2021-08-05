import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserData} from "../../Redux/auth-reduser";

//debugger

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
        //authAPI.me()
    }

    render() {
        return <Header {...this.props}/>

    }
};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default HeaderContainer = connect(mapStateToProps,
    {setAuthUserData,
        getAuthUserData}
    )(HeaderContainer);