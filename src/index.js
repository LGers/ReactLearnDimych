import state, {subscribe} from "./Components/Redux/state";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {addPost, updNewPostText, store} from "./Components/Redux/state";
//import {store} from "./Components/Redux/state";

let rerenderEntireTree = (store) => {
    //debugger
    ReactDOM.render(
        <React.StrictMode>
            <App state={store} addPost={store.addPost} updNewPostText={store.updNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);