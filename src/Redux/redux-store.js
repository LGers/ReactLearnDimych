import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogs-reducer";
import sidebarReduser from "./sidebar-reducer";
import usersReduser from "./users-reducer";
import authReducer from "./auth-reduser";

let redusers = combineReducers(
    {
        profilePage: profileReduser,
        dialogPage: dialogsReduser,
        sidebar: sidebarReduser,
        usersPage: usersReduser,
        auth: authReducer
    }
);


let store = createStore(redusers);

window.store=store;

export default store;