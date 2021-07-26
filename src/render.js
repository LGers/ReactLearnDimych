import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updTextArea} from "./Components/Redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updTextArea={updTextArea}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
