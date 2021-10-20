const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    dialogsData: [
        {id:"1", to:"/taras", name: "Taras"},
        {id:"2", to:"/sania", name: "Sania"},
        {id:"3", to:"/vasiania", name: "Vasiania"},
        {id:"4", to:"/tania", name: "Tania"},
        {id:"5", to:"/rita", name: "Rita"}
    ],
    messagesData: [
        {id: 1, messageText: "Привет как дела"},
        {id: 2, messageText: "Как твое It"},
        {id: 3, messageText: "Еще не ахти?"}
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:        
            state.newMessageBody = action.messageBody;
            return state;
        case SEND_MESSAGE:
            let messageBody = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 6, messageText: messageBody});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
}
export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, messageBody: body}
}

export default dialogsReducer;