import React from "react";
import {addMessageAC, updNewMessageBodyAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogPage
    let addMsgClick = () => {
        props.store.dispatch(addMessageAC())
    }

    let onMsgChange = (e) => {
        let action = updNewMessageBodyAC(e);
        props.store.dispatch(action)
    }

    return (
        <Dialogs
            addMsg={addMsgClick}
            onMsgChange={onMsgChange}

            dataDialogs={state.dataDialogs}
            dataMsgs={state.dataMsgs}
            newMsgBody={state.newMsgBody}
            dialogPage={state}
        />)
}

export default DialogsContainer;