import React from 'react';
import './App.css';
import NavBar from './Components/navBar/NavBar';
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
import Login from "./Components/Login/Login";

const App = () => {
    return (
        <Router>
            <div className='appWrapper'>
                <HeaderContainer />
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path="/Profile/:userId?" render={() =><ProfileContainer/>
                    }/>

                    <Route path="/dialogs" render={() =>
                        <DialogsContainer/>}
                    />
                    <Route path="/users/:currentPage?" render={() => <UsersContainer />}
                    />
                    <Route path="/login" render={() => <Login />}
                    />
                </div>
            </div>
        </Router>
    );
}

export default App;
