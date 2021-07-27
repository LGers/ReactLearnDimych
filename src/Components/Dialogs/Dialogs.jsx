import React from "react";
import st from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsEl = props.dialogPage.dataDialogs.map(d => <DialogItem idItem={d.id} name={d.name}/>)
    let messageEl = props.dialogPage.dataMsgs.map(m => <Message messageId={m.id} message={m.message}/>)

    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                {dialogsEl}
            </div>
            <div className={st.messages}>
                {messageEl}
            </div>
        </div>
    )
}

export default Dialogs;