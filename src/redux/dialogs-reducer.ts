import { InferActionsTypes } from './redux-store';

type DialogsType = {
    id: number,
    to: string,
    name: string
}
type MessagesDataType = {
    id: number,
    messageText: string
}

let initialState = {
    dialogsData: [
        {id: 1, to:"/taras", name: "Taras"},
        {id: 2, to:"/sania", name: "Sania"},
        {id: 3, to:"/vasiania", name: "Vasiania"},
        {id: 4, to:"/tania", name: "Tania"},
        {id: 5, to:"/rita", name: "Rita"}
    ] as Array<DialogsType>,
    messagesData: [
        {id: 1, messageText: "Привет как дела"},
        {id: 2, messageText: "Как твое It"},
        {id: 3, messageText: "Еще не ахти?"}
    ] as Array<MessagesDataType>,
}

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

export const dialogsReducer = (state = initialState, action:ActionsTypes) => {
    switch(action.type){
        case 'sn/dialogs/SEND-MESSAGE':
            let messageBody = action.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messagesData: [...state.messagesData, {id: state.messagesData.length+2, messageText: messageBody}],
            };
        default:
            return state;
    }
}

export const actions = {
    sendMessage: (newMessageBody:string) => ({type: 'sn/dialogs/SEND-MESSAGE', newMessageBody} as const)
}
export default dialogsReducer;