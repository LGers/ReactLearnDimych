import React from 'react';
import store from "../Redux/redux-store";

const _StoreContext = React.createContext(null);

export const Provider = (props) => {
    return <_StoreContext.Provider value={props.store}>
        {props.children}
    </_StoreContext.Provider>
}
export default _StoreContext;

