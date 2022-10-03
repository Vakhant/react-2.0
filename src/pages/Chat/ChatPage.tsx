import { type } from 'os'
import React, { useEffect, useState } from 'react'

export type ChatMessageT = {
    message: string
    photo: string
    userId: number
    userName: string
}



const ChatPage: React.FC = () => {
    return <div>
        <Chat/>
    </div>
}
const Chat: React.FC = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket|null>(null)

    useEffect(()=>{
        let ws:WebSocket
        const closeHandler = () => {
            console.log('CLOSE WS');
            setTimeout(createChannel, 3000)
        }

        function createChannel(){
            ws?.removeEventListener('close', closeHandler)
            ws?.close()
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }
        createChannel()
        
        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])

    return <div>
        <MessageList wsChannel={wsChannel}/>
        <AddMessageForm wsChannel={wsChannel}/>
    </div>
}
const MessageList: React.FC<{wsChannel: WebSocket|null}> = ({wsChannel}) => {
    const [messagesList, setMessages] = useState<ChatMessageT[]>([])

    useEffect(()=>{
        let messageHendler = (e:MessageEvent)=>{
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages]);
            
        }
        wsChannel?.addEventListener('message', messageHendler)
        return () => {
            wsChannel?.removeEventListener('message', messageHendler)
        }
    }, [wsChannel])

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
const AddMessageForm: React.FC<{wsChannel: WebSocket|null}> = ({wsChannel}) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending'|'ready'>('pending')

    useEffect(() => {
        let openHandler = () => {
            setReadyStatus('ready')
        }
        wsChannel?.addEventListener('open', openHandler)
        return ()=>{
            wsChannel?.removeEventListener('open', openHandler)
        }
    },[wsChannel])

    const sendMessage = () => {
        if (!message) {
            return
        }
        wsChannel?.send(message)
        setMessage('')
    }
    return <div>
        <textarea onChange={(e)=>setMessage(e.currentTarget.value)} value={message}></textarea>
        <button disabled={wsChannel === null || readyStatus !== "ready"} onClick={sendMessage}>Send</button>
    </div>
}

export default ChatPage