const ADD_MSG = 'ADD_MSG';
const UPD_NEW_MSG_BODY = 'UPD_NEW_MSG_BODY';

const dialogsReduser = (state, action) => {

    switch (action.type) {
        case ADD_MSG:
            let body = state.newMsgBody;
            state.newMsgBody = '';
            state.dataMsgs.push({id: 6, message: body});

            /*
                    let newMsg = {
                        id: '0',
                        message: state._state.dialogPage.newMsgBody
                    };
                    state.dataMsgs.push(newMsg);
                    state.newMsgBody = '';*/
            //state._callSubscriber(state._state);
            return state;
        case UPD_NEW_MSG_BODY:
            state.newMsgBody = action.newBody;
            //state._callSubscriber(state._state);
            return state;
        default:
            return state;
    }


}
export default dialogsReduser;