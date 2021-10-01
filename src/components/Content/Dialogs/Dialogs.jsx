import css from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogs_list}>
        <div className={css.dialogs_list_block}>Angela</div>
        <div className={css.dialogs_list_block}>Sania</div>
        <div className={css.dialogs_list_block}>Vasiania</div>
        <div className={css.dialogs_list_block}>Tania</div>
        <div className={css.dialogs_list_block}>Rita</div>
      </div>
      <div className={css.dialogs_messages_list}>
        <div className={css.dialogs_messages_list_block}>Привет как дела</div>
        <div className={css.dialogs_messages_list_block}>Как твое It</div>
        <div className={css.dialogs_messages_list_block}>Еще не ахти?</div>
      </div>
      
    </div>
  );
}

export default Dialogs;