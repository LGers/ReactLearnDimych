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
//import {dataPostsJs, dataDialogsJs, dataMsgsJs} from "./Components/Redux/state";
//import {state} from "./Components/Redux/state";

const App = (props) => {
    //debugger;
    let dataPostsJs = props.state.dataPostsJs;
    let dataDialogsJs = props.state.dataDialogsJs;
    let dataMsgsJs = props.state.dataMsgsJs;

    let dataPosts = props.state.profilePage.dataPosts;
    let dataDialogs = props.state.dialogPage.dataDialogs;
    let dataMsgs = props.state.dialogPage.dataMsgs;

    let dataDialogsCombine = () => {
        return <Dialogs dataDialogs={dataDialogs} dataMsgs={dataMsgs}/>;
    }
//debugger
    return (
        <Router>
            <div className='appWrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path="/Profile" render={() =>
                        <ProfilePage
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updNewPostText={props.updNewPostText}

                            //dataPosts={dataPosts}
                            //newPostText={props.state.profilePage.newPostText}
                        />
                    }/>
                    {/*<Route path="/dialogs" render={dataDialogsCombine}/>*/}
                    <Route path="/dialogs" render={() =>
                        <Dialogs dialogPage={props.state.dialogPage}/>}
                    />
                </div>
            </div>
        </Router>
    );
}

export default App;
