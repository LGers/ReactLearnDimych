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

const App = (props) => {
//debugger
    return (
        <Router>
            <div className='appWrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path="/Profile" render={() =>
                        <ProfilePage />
                    }/>
                    <Route path="/dialogs" render={() =>
                        <DialogsContainer />}
                    />
                </div>
            </div>
        </Router>
    );
}

export default App;
