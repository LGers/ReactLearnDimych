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

const App = (props) => {
    // let dataDialogsCombine = () => {
    //     return <Dialogs
    //         // dataDialogs={props.state.dialogPage.dataDialogs}
    //         dataDialogs={props.state.getState()}
    //         dataMsgs={props.state.dialogPage.dataMsgs}
    //     />;
    // }
    //debugger
    return (
        <Router>
            <div className='appWrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path="/Profile" render={() =>
                        <ProfilePage
                            //store={props.store}
                            //dataPosts={props.state.profilePage.dataPosts}
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />
                    }/>
                    <Route path="/dialogs" render={() =>
                        <Dialogs
                            store={props.store}
                            //dialogPage={props.state.dialogPage}
                            dispatch={props.dispatch}
                        />}
                    />
                </div>
            </div>
        </Router>
    );
}

export default App;
