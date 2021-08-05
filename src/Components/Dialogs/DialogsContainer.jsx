import React from "react";
import {addMessageAC, updNewMessageBodyAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dataDialogs: state.dialogPage.dataDialogs,
        dataMsgs: state.dialogPage.dataMsgs,
        //isAuth: state.auth.isAuth,
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
const DialogsContainer = compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
// let AuthRedirectComponent = withAuthRedirect(Dialogs) //-----HOC-----
// // const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;