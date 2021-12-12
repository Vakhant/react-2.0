import css from './Message.module.css';

const Message = (props) => {
  return (
        <div className={css.dialogs_messages_list_block}>{props.messageText}</div>
  );
}

export default Message;