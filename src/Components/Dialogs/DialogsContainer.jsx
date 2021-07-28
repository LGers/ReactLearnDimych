import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageAC, updNewMessageBodyAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {addPostAC, updNewPostTextAC} from "../../Redux/profile-reducer";

const DialogsContainer = (props) => {


    /*let dialogsEl = state.dataDialogs.map(d => <DialogItem idItem={d.id} name={d.name}/>)
    let messageEl = state.dataMsgs.map(m => <Message messageId={m.id} message={m.message}/>)
    let newMessageBody = state.newMsgBody;

    let newMsgElement = React.createRef();

    let addMsg = () => {
        props.store.dispatch(addMessageAC())
    }

    let onMsgChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updNewMessageBodyAC(body));

    }*/

    //let state = props.store.getState();

    let state = props.store.getState().dialogPage
    let addMsgClick = () => {
        props.store.dispatch(addMessageAC())
    }

    let onMsgChange = (e) => {
        let action = updNewMessageBodyAC(e);
        props.store.dispatch(action)
    }

    return (
        <Dialogs
            addMsg={addMsgClick}
            onMsgChange={onMsgChange}

            dataDialogs={state.dataDialogs}
            dataMsgs={state.dataMsgs}
            newMsgBody={state.newMsgBody}
            dialogPage={state}
        />)
    /*(<div className={st.dialogs}>
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
    </div>)
    */

}

export default DialogsContainer;