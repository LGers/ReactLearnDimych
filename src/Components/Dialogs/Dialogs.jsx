import React from "react";
import st from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsEl = props.dataDialogs.map(d => <DialogItem idItem={d.id} key={d.id} name={d.name}/>)
    let messageEl = props.dataMsgs.map(m => <Message messageId={m.id} key={m.id} message={m.message}/>)
    let newMessageBody = props.newMsgBody;
    let newMsgElement = React.createRef();
    let onAddMsg = () => {
        props.addMsg();
    }

    let onMsgChange = () => {
        let body = newMsgElement.current.value;
        props.onMsgChange(body);
    }

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