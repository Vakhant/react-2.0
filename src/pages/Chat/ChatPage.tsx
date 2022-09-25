import { type } from 'os'
import React, { useEffect, useState } from 'react'

export type ChatMessageT = {
    message: string
    photo: string
    userId: number
    userName: string
}

const wsChannel = new WebSocket(
    'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
)

const ChatPage: React.FC = () => {
    return <div>
        <Chat/>
    </div>
}
const Chat: React.FC = () => {
    return <div>
        <MessageList/>
        <AddMessageForm/>
    </div>
}
const MessageList: React.FC = () => {
    const [messagesList, setMessages] = useState<ChatMessageT[]>([])
    useEffect(()=>{
        wsChannel.addEventListener('message', (e:MessageEvent)=>{
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages]);
        })
    }, [])
    return <div style={{height: '200px', overflowY: 'auto'}}>
        {messagesList.map((m, index) => <Message key={index} message={m}/>)}
    </div>
}
const Message: React.FC<{message: ChatMessageT}> = ({message}) => {
    return <div>
        <img width='50px' src={message.photo} alt="" /><b>{message.userName}</b>
        <br />
        {message.message}
    </div>
}
const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const sendMessage = () => {
        if (!message) {
            return
        }
        wsChannel.send(message)
        setMessage('')
    }
    return <div>
        <textarea onChange={(e)=>setMessage(e.currentTarget.value)} value={message}></textarea>
        <button onClick={sendMessage}>Send</button>
    </div>
}

export default ChatPage