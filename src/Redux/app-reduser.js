import {getAuthUserData} from "./auth-reduser";

const INITIALAIZED_SUCCESS = 'lm-network/app/INITIALAIZED_SUCCESS';


let initialState = {
    initialaized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALAIZED_SUCCESS: {
            return {
                ...state,
                initialaized: true
            }
        }
        default: {
            return state
        }
    }
}

export const initialaizedSuccess = () => ({type: INITIALAIZED_SUCCESS})

//thunk s
export const initializeApp = () => (dispastch) => {
    let promise = dispastch(getAuthUserData())
    promise.then(() => {
        dispastch(initialaizedSuccess())
    })
}
export const _initializeApp = () => async (dispastch) => {
    await dispastch(getAuthUserData())
    dispastch(initialaizedSuccess())
}

export default appReducer;
