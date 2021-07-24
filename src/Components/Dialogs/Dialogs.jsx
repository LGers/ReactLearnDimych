import React from "react";
import st from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let pathItem = "/dialogs/" + props.idItem;

    return (
        <div className={st.dialog + ' ' + st.active}>
            <NavLink to={pathItem} className={st.dialog + ' ' + st.active}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={st.message}>
            {props.message} + {props.messageId}
        </div>
    )
}

const Dialogs = (props) => {
    let dataDialogs = [
        {id: '1', name: 'Leonid'},
        {id: '2', name: 'Alexey dfg'},
        {id: '3', name: 'Diana'},
        {id: '4', name: 'Bob'},
        {id: '5', name: 'Scruge'}
    ];
    let dataMsgs = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'i\'s me'},
        {id: '3', message: 'I best by React'},
        {id: '4', message: 'and me'}
    ];
    let dialogsEl = dataDialogs.map(d => <DialogItem idItem={d.id} name={d.name}/>)
    let messageEl = dataMsgs.map(m => <MessageItem messageId={m.id} message={m.message}/>)

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