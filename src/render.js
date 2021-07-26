import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updNewPostText} from "./Components/Redux/state";

export let rerenderEntireTree = (state) => {
    //debugger
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updNewPostText={updNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
