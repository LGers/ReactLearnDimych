import React from "react";
import st from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageAC, updNewMessageBodyAC} from "../../Redux/dialogs-reducer";
/* import {
     addMsgAC,
     onMsgChangeAC,
 } from "../../Redux/store";
*/
const Dialogs = (props) => {
//debugger
    let state=props.store.getState().dialogPage

    let dialogsEl = state.dataDialogs.map(d => <DialogItem idItem={d.id} name={d.name}/>)
    let messageEl = state.dataMsgs.map(m => <Message messageId={m.id} message={m.message}/>)
    let newMessageBody = state.newMsgBody;

    let newMsgElement = React.createRef();

    let addMsg = () => {
        //debugger
        //let text = newMsgElement.current.value;
        props.store.dispatch(addMessageAC())
    }

    let onMsgChange = (e) => {
        //debugger
        let body = e.target.value;
        props.store.dispatch(updNewMessageBodyAC(body));
        // let text = newMsgElement.current.value;
        // props.dispatch(onMsgChangeAC(text))
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
                    <textarea placeholder={'Enter your message'} onChange={onMsgChange} ref={newMsgElement}
                              value={newMessageBody}/>
                </div>
                <div>
                    <button onClick={addMsg}>Add msg</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;