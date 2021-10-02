import DialogNavBlock from './DialogName/DialogNavBlock';
import css from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = () => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogs_list}>
        <DialogNavBlock to="/taras" name="Taras"/>
        <DialogNavBlock to="/sania" name="Sania"/>
        <DialogNavBlock to="/vasiania" name="Vasiania"/>
        <DialogNavBlock to="/tania" name="Tania"/>
        <DialogNavBlock to="/rita" name="Rita"/>
      </div>
      <div className={css.dialogs_messages_list}>
        <Message messageText="Привет как дела" />
        <Message messageText="Как твое It" />
        <Message messageText="Еще не ахти?" />
      </div>
      
    </div>
  );
}

export default Dialogs;