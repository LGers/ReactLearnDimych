import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import NavBar from './Components/navBar/NavBar';
import ProfilePage from './Components/profilePage/ProfilePage';
import Dialogs from './Components/Dialogs/Dialogs';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import store from "./Redux/store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
        <Router>
            <div className='appWrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path="/Profile" render={() =>
                        <ProfilePage
                            store={props.store}
                        />
                    }/>
                    <Route path="/dialogs" render={() =>
                        <DialogsContainer
                            store={props.store}
                        />}
                    />
                </div>
            </div>
        </Router>
    );
}

export default App;
