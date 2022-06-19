import css from './Message.module.css';

type PropsT = {
  messageText: string
  id: number
}

const Message: React.FC<PropsT> = (props) => {
  return (
        <div className={css.dialogs_messages_list_block}>{props.messageText}</div>
  );
}

export default Message;