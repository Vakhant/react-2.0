import { getAuthUserData } from './auth-reducer';
import { InferActionsTypes } from './redux-store';

let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

export const appReducer = (state = initialState, action: ActionsType):InitialStateType => {
    switch(action.type){
        case 'SN_APP_INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
        }
}

const actions = {
    initializedSuccess: () => ({type: 'SN_APP_INITIALIZED_SUCCESS'} as const)
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    // dispatch(somethingElse())
    Promise.all([promise]).then(()=>{dispatch(actions.initializedSuccess())})
    // promise.then(dispatch(initializedSuccess()))
}


export default appReducer;