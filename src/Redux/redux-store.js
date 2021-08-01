import {combineReducers, createStore} from "redux";
import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogs-reducer";
import sidebarReduser from "./sidebar-reducer";
import usersReduser from "./users-reducer";

let redusers = combineReducers(
    {
        profilePage: profileReduser,
        dialogPage: dialogsReduser,
        sidebar: sidebarReduser,
        usersPage: usersReduser
    }
);


let store = createStore(redusers);

export default store;