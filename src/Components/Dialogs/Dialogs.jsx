import React from "react";
import st from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const addMsgForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMsg" component="input" placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}
const AddMsgReduxForm = reduxForm({form: 'addmessage'})(addMsgForm)

const Dialogs = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.addMsg(formData.newMsg)
        formData.newMsg='';
    }
    //debugger
    let dialogsEl = props.dataDialogs.map(d => <DialogItem idItem={d.id} key={d.id} name={d.name}/>)
    let messageEl = props.dataMsgs.map(m => <Message messageId={m.id} key={m.id} message={m.message}/>)
    return <div className={st.dialogs}>

        <div className={st.dialogsItems}>
            {dialogsEl}
        </div>
        <div className={st.messages}>
            {messageEl}
            <div>
                {/*<LoginReduxForm onSubmit/> // this is same \\onSubmit={onSubmit}\\===\\onSubmit\\*/}
                <AddMsgReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    </div>
}

export default Dialogs;