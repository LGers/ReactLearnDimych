import React from "react";
import st from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
//import {dataDialogsJs} from './../../data';
//import {dataMsgsJs} from './../../data';


const Dialogs = (props) => {

    // let dataDialogs = [
    //     {id: '1', name: 'Leonid'},
    //     {id: '2', name: 'Alexey dfg'},
    //     {id: '3', name: 'Diana'},
    //     {id: '4', name: 'Bob'},
    //     {id: '5', name: 'Scruge'}
    // ];
    // let dataMsgs = [
    //     {id: '1', message: 'Hi'},
    //     {id: '2', message: 'i\'s me'},
    //     {id: '3', message: 'I best by React'},
    //     {id: '4', message: 'and me'}
    // ];

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