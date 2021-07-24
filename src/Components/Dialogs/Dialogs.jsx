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
let dataDialogs = [
    ['1', 'Leonid'],
    ['2', 'Alexey'],
    ['3', 'Diana'],
    ['4', 'Bob'],
    ['5', 'Scruge']
];
let dataMsgs = [
    ['1', 'Hi'],
    ['2', 'i\'s me'],
    ['3', 'I best by React'],
    ['4', 'and me']
];

const Dialogs = (props) => {
    let dataDialogs = [
        {id: '1', name: 'Leonid'},
        {id: '2', name: 'Alexey'},
        {id: '3', name: 'Diana'},
        {id: '4', name: 'Bob'},
        {id: '5', name: 'Scruge'}
    ];
    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                <DialogItem idItem='1' name='Leonid'/>
                <DialogItem idItem='2' name='Alexey'/>
                <DialogItem idItem='3' name='Diana'/>
                <DialogItem idItem='4' name='Bob'/>
                <DialogItem idItem='5' name='Scruge'/>
            </div>
            <div className={st.messages}>
                <MessageItem messageId='1' message='Hi'/>
                <MessageItem messageId='2' message="i's me"/>
                <MessageItem messageId='3' message='I best by React'/>
                <MessageItem messageId='4' message='and me'/>
            </div>
        </div>
    )
}

export default Dialogs;