import React, {Component} from 'react';
import './App.css';
import {
    withRouter, Route,
    //BrowserRouter as Router
} from "react-router-dom";

import NavBar from './Components/navBar/NavBar';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/profilePage/ProfileContainer";
import HeaderContainer from "./Components/header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import appReducer, {initializeApp} from "./Redux/app-reduser";
import {getAuthUserData, logout} from "./Redux/auth-reduser";
import Preloader from "./Components/common/preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialaized) {return <Preloader/>}

        return (
            //<Router>
            <div className='appWrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path="/Profile/:userId?" render={() => <ProfileContainer/>
                    }/>

                    <Route path="/dialogs" render={() =>
                        <DialogsContainer/>}
                    />
                    <Route path="/users/:currentPage?" render={() => <UsersContainer/>}
                    />
                    <Route path="/login" render={() => <Login/>}
                    />
                </div>
            </div>
            //</Router>
        );
    }
}

const mapStateToProps=(state)=>({
    initialaized: state.app.initialaized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

//     connect(null,
//     {getAuthUserData    })
// (App);
//     export default connect(null,
//     {getAuthUserData    })
// (App);
