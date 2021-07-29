import React from "react";
import {addMessageAC, updNewMessageBodyAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


/*const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogPage
                    let addMsgClick = () => {
                        store.dispatch(addMessageAC())
                    }

                    let onMsgChange = (body) => {
                        //debugger
                        let action = updNewMessageBodyAC(body);
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
*/

let mapStateToProps = (state) => {
    //debugger
    return {

        //dialogPage: state.DialogPage
        dataDialogs: state.dialogPage.dataDialogs,
        dataMsgs: state.dialogPage.dataMsgs,
        //newMsgBody:state.dialogPage.newMsgBody

    }
}
let mapDispatchToProps = (dispatch) => {
    //debugger
    return {
        onMsgChange:(body)=>{
            dispatch(updNewMessageBodyAC(body))
        },
        addMsg: ()=>{
            dispatch(addMessageAC())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;