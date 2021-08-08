import React from "react";
import {addMsg} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dataDialogs: state.dialogPage.dataDialogs,
        dataMsgs: state.dialogPage.dataMsgs,
        newMsgBody: state.dialogPage.newMsgBody,
        isAuth: state.auth.isAuth,
    }
}
const DialogsContainer = compose (
    connect(mapStateToProps, {addMsg}),
    withAuthRedirect
)(Dialogs);


export default DialogsContainer;