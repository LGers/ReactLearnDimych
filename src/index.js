import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import store from "./Components/Redux/store";
import store from "./Redux/redux-store";

let rerenderEntireTree = (state) => {
    //debugger
    ReactDOM.render(
        <React.StrictMode>
            {/*<App state={state} addPost={store.addPost.bind(store)} updNewPostText={store.updNewPostText.bind(store)}/>*/}
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

//store.subscribe(rerenderEntireTree);
store.subscribe(()=>{
    let state=store.getState();
    rerenderEntireTree(state);
});