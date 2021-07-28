import React from "react";
import st from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {addPostAC, updNewPostTextAC} from "../../Redux/profile-reducer";
import {addMessageAC, updNewMessageBodyAC} from "../../Redux/dialogs-reducer";


const Dialogs = (props) => {

    //let state=props.store.getState().dialogPage

    let dialogsEl = props.dataDialogs.map(d => <DialogItem idItem={d.id} name={d.name}/>)
    let messageEl = props.dataMsgs.map(m => <Message messageId={m.id} message={m.message}/>)
    let newMessageBody = props.newMsgBody;
    //
    let newMsgElement = React.createRef();
    //
    // let addMsg = () => {
    //
    //     props.dispatch(addMsgAC())
    // }
    //
    // // let onMsgChange = (e) => {

//-----------------------------------------
    //let state = props.store.getState();

    let onAddMsg = () => {
        props.addMsg();
        //props.store.dispatch(addMessageAC())
        // store.dispatch(addPostAC())
    }

    let onMsgChange = () => {
        //let action = updNewMessageBodyAC(e);
        //props.store.dispatch(action)

        //let body = e.target.value;
        let body = newMsgElement.current.value;
        props.onMsgChange(body);
    }
//-----------------------------------------


    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                {dialogsEl}
            </div>
            <div className={st.messages}>
                {messageEl}
                <div>
                    <textarea placeholder={'Enter your message'} onChange={onMsgChange} ref={newMsgElement}
                              value={newMessageBody}/>
                </div>
                <div>
                    <button onClick={onAddMsg}>Add msg</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;