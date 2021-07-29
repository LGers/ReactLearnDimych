const ADD_MSG = 'ADD_MSG';
const UPD_NEW_MSG_BODY = 'UPD_NEW_MSG_BODY';

let initialState = {
    dataDialogs: [
        {id: '1', name: 'Leonid1 from data.jsx'},
        {id: '2', name: 'Alexey props'},
        {id: '3', name: 'Diana'},
        {id: '4', name: 'Bob'},
        {id: '5', name: 'Scruge'}
    ],
    dataMsgs: [
        {id: '1', message: 'Js Hi'},
        {id: '2', message: 'i\'s me'},
        {id: '3', message: 'I best by React'},
        {id: '4', message: 'and me'}
    ],
    newMsgBody: ''
}

const dialogsReduser = (state = initialState, action) => {
//debugger
    //let stateCopy={...state};
    switch (action.type) {

        case ADD_MSG: {
            let newPost = {id: 6, message: state.newMsgBody}
            return {
                ...state,
                dataMsgs: [...state.dataMsgs, newPost],
                newMsgBody: ''
            };
            //stateCopy.dataMsgs.push({id: 6, message: state.newMsgBody});


            //return stateCopy;
        }
        case UPD_NEW_MSG_BODY: {
            return {
                ...state,
                newMsgBody: action.newMsgBody
            };
            //stateCopy.newMsgBody = action.newMsgBody;
            //return stateCopy;
        }
        default:
            return state;
    }
}
export const addMessageAC = (body) => ({type: ADD_MSG})
export const updNewMessageBodyAC = (body) =>
    ({type: UPD_NEW_MSG_BODY, newMsgBody: body})

export default dialogsReduser;