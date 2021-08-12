import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogs-reducer";
import sidebarReduser from "./sidebar-reducer";
import usersReduser from "./users-reducer";
import authReducer from "./auth-reduser";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reduser";

let redusers = combineReducers(
    {
        profilePage: profileReduser,
        dialogPage: dialogsReduser,
        sidebar: sidebarReduser,
        usersPage: usersReduser,
        auth: authReducer,
        form: formReducer,
        app: appReducer
    }
);


//let store = createStore(redusers, applyMiddleware(thunkMiddleWare));

//import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleWare)
));

window.store=store;

export default store;