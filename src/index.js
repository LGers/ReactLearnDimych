import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/redux-store";
//import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        //<BrowserRouter>
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>,
        //</BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());
//store.subscribe(rerenderEntireTree);
store.subscribe(()=>{
    let state=store.getState();
    rerenderEntireTree(state);
});