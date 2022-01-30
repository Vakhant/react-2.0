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
    ]
}

export const dialogsReducer = (state = initialState, action) => {
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

export const sendMessageCreator = (newMessageBody) => {return {type: SEND_MESSAGE, newMessageBody}}

export default dialogsReducer;