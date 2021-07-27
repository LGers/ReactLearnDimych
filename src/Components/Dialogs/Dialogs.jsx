import React from "react";
import st from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMsgActionCreator,
    addPostActionCreator,
    onMsgChangeActionCreator,
    onPostChangeActionCreator
} from "../Redux/state";


const Dialogs = (props) => {

    let dialogsEl = props.dialogPage.dataDialogs.map(d => <DialogItem idItem={d.id} name={d.name}/>)
    let messageEl = props.dialogPage.dataMsgs.map(m => <Message messageId={m.id} message={m.message}/>)

    let newMsgElement = React.createRef();
    let addMsg = () => {
        //debugger
        let text = newMsgElement.current.value;
        props.dispatch(addMsgActionCreator())
    }

    let onMsgChange = () => {
        let text = newMsgElement.current.value;
        props.dispatch(onMsgChangeActionCreator(text))
    }
    //debugger
    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                {dialogsEl}
            </div>
            <div className={st.messages}>
                {messageEl}

                <div>
                    <textarea onChange={onMsgChange} ref={newMsgElement} value={props.dialogPage.newMsgText}/>
                </div>
                <div>
                    <button onClick={addMsg}>Add msg</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;