import React from "react";
import {addMessageAC, updNewMessageBodyAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = ( ) => {



    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogPage
                let addMsgClick = () => {
                    store.dispatch(addMessageAC())
                }

                let onMsgChange = (e) => {
                    //debugger
                    let action = updNewMessageBodyAC(e);
                    store.dispatch(action)
                }

                return <Dialogs
                    addMsg={addMsgClick}
                    onMsgChange={onMsgChange}

                    dataDialogs={state.dataDialogs}
                    dataMsgs={state.dataMsgs}
                    newMsgBody={state.newMsgBody}
                    dialogPage={state}
                />
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;