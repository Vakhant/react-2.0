import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import DialogNavBlock from './DialogName/DialogNavBlock';
import css from './Dialogs.module.css';
import Message from './Message/Message';
import { Textarea } from './../common/FormsControls/FormsControls';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';

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

const maxLength20 = maxLengthCreator(20);

const AddMessageForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} validate={[requiredField, maxLength20]} name={'newMessageBody'} placeholder={'enter your message'}/>
      </div>
      <div><button>send</button></div>
    </form>
  );
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);


export default Dialogs;