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


const App = (props) => {
    return (
        <Router>
            <div className='appWrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path="/Profile" component={ProfilePage}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/news" component={Dialogs}/>
                    <Route path="/music" component={Dialogs}/>
                    <Route path="/settings" component={Dialogs}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
