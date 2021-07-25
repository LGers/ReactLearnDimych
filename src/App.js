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
import {dataPostsJs, dataDialogsJs, dataMsgsJs} from "./data";

const App = (props) => {
    // let dataPostsJs = () => props.dataPostsJs;
    // let dataDialogsJs = () => props.dataDialogsJs
    let dataPostsJs = props.dataPostsJs;
    let dataDialogsJs = props.dataDialogsJs;
    let dataMsgsJs = props.dataMsgsJs;
    //console.log(dataMsgsJs)
    //debugger;

    let dataDialogsJs2=()=>{
        return <Dialogs dataDialogsJs={dataDialogsJs} dataMsgsJs={dataMsgsJs}/>;
    }
    //console.log(dataMsgsJs2)
    return (
        <Router>
            <div className='appWrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path="/Profile" render={() => <ProfilePage dataPostsJs={dataPostsJs}/>}/>
                    {/*<Route path="/dialogs" render={() => <Dialogs dataDialogsJs={dataDialogsJs} dataMsgsJs={dataDialogsJs}/>}/>*/}
                    <Route path="/dialogs" render={dataDialogsJs2}/>
                    <Route path="/news" render={() => <Dialogs/>}/>
                    <Route path="/music" render={() => <Dialogs/>}/>
                    <Route path="/settings" render={() => <Dialogs/>}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
