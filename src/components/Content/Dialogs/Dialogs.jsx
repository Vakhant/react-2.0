import { useState } from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/state';
import DialogNavBlock from './DialogName/DialogNavBlock';
import css from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  let dialogsData = [
    {id:"1", to:"/taras", name: "Taras"},
    {id:"2", to:"/sania", name: "Sania"},
    {id:"3", to:"/vasiania", name: "Vasiania"},
    {id:"4", to:"/tania", name: "Tania"},
    {id:"5", to:"/rita", name: "Rita"}
  ]
  let messagesData = [
    {id: 1, messageText: "Привет как дела"},
    {id: 2, messageText: "Как твое It"},
    {id: 3, messageText: "Еще не ахти?"}
  ]

  let dialogsDataMap = props.state.dialogsData.map(dialog => <DialogNavBlock name={dialog.name} to={dialog.to} id={dialog.id}/>)
  let messagesDataMap = props.state.messagesData.map(message => <Message messageText={message.messageText} id={message.id}/>)
  let newMessageBody = props.state.newMessageBody;
  let onMessageClick = (e) => {
    props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }
  return (
    <div className={css.dialogs}>
      <div className={css.dialogs_list}>
        {dialogsDataMap}
      </div>
      <div className={css.dialogs_messages_list}>
        <div>{messagesDataMap}</div>
        <div>
          <div><textarea value={newMessageBody}
            onChange={onNewMessageChange}
          placeholder="enter your message"></textarea></div>
          <div><button onClick={(onMessageClick)}>send</button></div>
        </div>
      </div>
      
    </div>
  );
}

export default Dialogs;