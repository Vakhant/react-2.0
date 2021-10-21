import { useState } from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/dialogs-reducer';
import DialogNavBlock from './DialogName/DialogNavBlock';
import Dialogs from './Dialogs';
import css from './Dialogs.module.css';
import Message from './Message/Message';

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let onMessageClick = (e) => {
    props.store.dispatch(sendMessageCreator())
  }
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }
  return <Dialogs state={state} onNewMessageChange={onNewMessageChange} onMessageClick={onMessageClick}/>
}

export default DialogsContainer;