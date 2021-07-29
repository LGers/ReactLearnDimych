import React from "react";
import {addMessageAC, updNewMessageBodyAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dataDialogs: state.dialogPage.dataDialogs,
        dataMsgs: state.dialogPage.dataMsgs,
    }
}
let mapDispatchToProps = (dispatch) => {
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