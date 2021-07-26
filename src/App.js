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
    debugger;
    let dataPostsJs = props.state.dataPostsJs;
    let dataDialogsJs = props.state.dataDialogsJs;
    let dataMsgsJs = props.state.dataMsgsJs;

    let dataPosts = props.state.profilePage.dataPosts;
    let dataDialogs = props.state.dialogPage.dataDialogs;
    let dataMsgs = props.state.dialogPage.dataMsgs;

    let dataDialogsCombine=()=>{
        return <Dialogs dataDialogs={dataDialogs} dataMsgs={dataMsgs}/>;
    }

    return (
        <Router>
            <div className='appWrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path="/Profile" render={() => <ProfilePage dataPosts={dataPosts} addPost={props.addPost} updTextArea={props.updTextArea}/>}/>
                    {/*<Route path="/dialogs" render={() => <Dialogs dataDialogsJs={dataDialogsJs} dataMsgsJs={dataDialogsJs}/>}/>*/}
                    <Route path="/dialogs" render={dataDialogsCombine}/>
                    <Route path="/news" render={() => <Dialogs/>}/>
                    <Route path="/music" render={() => <Dialogs/>}/>
                    <Route path="/settings" render={() => <Dialogs/>}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
