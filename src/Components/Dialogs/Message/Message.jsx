import st from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={st.message}>
            {props.message} + {props.messageId}
        </div>
    )
}

export default Message;