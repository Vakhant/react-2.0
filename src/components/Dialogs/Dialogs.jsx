import { Redirect } from 'react-router-dom';
import DialogNavBlock from './DialogName/DialogNavBlock';
import css from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.state;

  let dialogsDataMap = props.state.dialogsData.map(dialog => <DialogNavBlock name={dialog.name} to={dialog.to} id={dialog.id}/>)
  let messagesDataMap = props.state.messagesData.map(message => <Message messageText={message.messageText} id={message.id}/>)
  let newMessageBody = props.state.newMessageBody;
  let onMessageClick = (e) => {
    props.onMessageClick();
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.onNewMessageChange(body);
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