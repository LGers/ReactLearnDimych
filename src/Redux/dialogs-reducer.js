const ADD_MSG = 'lm-network/dialogs/ADD_MSG';
//const UPD_NEW_MSG_BODY = 'UPD_NEW_MSG_BODY';

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
    //newMsgBody: ''
}

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MSG: {
            let lastIdNumber = state.dataMsgs.length - 1;
            let newId = Number(state.dataMsgs[lastIdNumber].id) + 1
            let newPost = {id: newId, message: action.newMsg}
            return {
                ...state,
                dataMsgs: [...state.dataMsgs, newPost]
            };
        }
        default:
            return state;
    }
}
export const addMessageAC = (newMsg) => ({type: ADD_MSG, newMsg: newMsg})
//export const updNewMessageBodyAC = (body) =>
//    ({type: UPD_NEW_MSG_BODY, newMsgBody: body})

//thunk s
export const addMsg = (newMsg) => {
    return (dispatch)=>
    {
        dispatch(addMessageAC(newMsg))
    }
}

export default dialogsReduser;