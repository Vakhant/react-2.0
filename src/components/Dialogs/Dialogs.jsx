import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import DialogNavBlock from './DialogName/DialogNavBlock';
import css from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.state;

  let dialogsDataMap = props.state.dialogsData.map(dialog => <DialogNavBlock name={dialog.name} to={dialog.to} id={dialog.id}/>)
  let messagesDataMap = props.state.messagesData.map(message => <Message messageText={message.messageText} id={message.id}/>)
  // let newMessageBody = props.state.newMessageBody;

  let addNewMessage = (vals) => {
      props.sendMessage(vals.newMessageBody)
  }


  return (
    <div className={css.dialogs}>
      <div className={css.dialogs_list}>
        {dialogsDataMap}
      </div>
      <div className={css.dialogs_messages_list}>
        <div>{messagesDataMap}</div>
        <AddMessageReduxForm onSubmit={addNewMessage}/>
      </div>
      
    </div>
  );
}



const AddMessageForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'textarea'} name={'newMessageBody'} placeholder={'enter your message'}/>
      </div>
      <div><button>send</button></div>
    </form>
  );
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);


export default Dialogs;