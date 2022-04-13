import { getAuthUserData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean
}

let initialState:InitialStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: any):InitialStateType => {
    switch(action.type){
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
        }
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS // typeof выводит тип равный значению этой константы 'INITIALIZED_SUCCESS'
}

export const initializedSuccess = ():InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    // dispatch(somethingElse())
    Promise.all([promise]).then(()=>{dispatch(initializedSuccess())})
    // promise.then(dispatch(initializedSuccess()))
}


export default appReducer;