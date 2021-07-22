import React from 'react'
import './App.css';
import Header from './Components/header/Header'
import NavBar from './Components/navBar/NavBar'
import ProfilePage from './Components/profilePage/ProfilePage'
import Dialogs from './Components/Dialogs/Dialogs'

const App = (props) => {
    return (
        <div className='appWrapper'>
            <Header/>
            <NavBar/>
            {/* <Dialogs /> */}
            {/*<ProfilePage />*/}
            <div className='app-wrapper-content'>
                <Dialogs />
            </div>
        </div>);
}

export default App;
