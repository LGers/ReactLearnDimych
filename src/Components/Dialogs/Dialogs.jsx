import React from "react";
import st from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import messageData from "../../data";
import dataDialogsJs from './../../data';
import {dataMsgsJs} from './../../data';
//import dataDialogsJs from './../../data';


const Dialogs = (props) => {

    /*
    let cdg = dataFromFile.map((el) => {
            return (
                // '[{id: '+el[0] + ', name: '+el[1] + '}]'
                '"id: '+el[0] + ', name: '+el[1]+'"'
            )
        }
    )
    */
    //console.log('dataFromFile= ' + dataFromFile)
    //console.log('log c=' + cdg)
    //console.log('log c.name=' + cdg.name)
    //console.log('log c.name=' + cdg[0].name)
    console.log('dataDialogsJs=' + dataDialogsJs[0].name)
    console.log('dataDialogsJ2s=' + dataMsgsJs[0].name)
    //alert (dataDialogsJs[1].name+' id:'+dataDialogsJs[1].id)

    //let dataDialogsProps = props.dataDialogs;
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

    //previos let!! now from data jsx =>server
    //let dialogsEl = dataDialogs.map(d => <DialogItem idItem={d.id} name={d.name}/>)
    let dialogsEl = dataDialogsJs.map(d => <DialogItem idItem={d.id} name={d.name}/>)
    //let messageEl = dataMsgs.map(m => <Message messageId={m.id} message={m.message}/>)
    let messageEl = dataMsgsJs.map(m => <Message messageId={m.id} message={m.message}/>)

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