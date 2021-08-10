import {applyMiddleware, combineReducers, createStore} from "redux";
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


let store = createStore(redusers, applyMiddleware(thunkMiddleWare));

window.store=store;

export default store;