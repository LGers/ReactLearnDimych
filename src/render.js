import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, store, updNewPostText} from "./Components/Redux/state";

export let rerenderEntireTree = (state) => {
    //debugger
    ReactDOM.render(
        <React.StrictMode>
            <App state={store} addPost={store.addPost} updNewPostText={store.updNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
