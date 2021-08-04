import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import NavBar from './Components/navBar/NavBar';
import ProfilePage from './Components/profilePage/ProfilePage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/profilePage/ProfileContainer";
import HeaderContainer from "./Components/header/HeaderContainer";

const App = () => {
// debugger
    return (
        <Router>
            <div className='appWrapper'>
                <HeaderContainer />
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path="/Profile/:userId?" render={() =>
                        <ProfileContainer/>
                    }/>
                    <Route path="/dialogs" render={() =>
                        <DialogsContainer/>}
                    />
                    <Route path="/users" render={() => <UsersContainer />}
                    />
                </div>
            </div>
        </Router>
    );
}

export default App;
