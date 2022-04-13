const SEND_MESSAGE = 'SEND-MESSAGE';

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
    ] as Array<MessagesDataType>
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state = initialState, action:any) => {
    switch(action.type){
        case SEND_MESSAGE:
            let messageBody = action.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messagesData: [...state.messagesData, {id: 6, messageText: messageBody}],
            };
        default:
            return state;
    }
}

type SendMessageCreatorType = {type: typeof SEND_MESSAGE, newMessageBody: string}
export const sendMessageCreator = (newMessageBody:string):SendMessageCreatorType => {return {type: SEND_MESSAGE, newMessageBody}}

export default dialogsReducer;