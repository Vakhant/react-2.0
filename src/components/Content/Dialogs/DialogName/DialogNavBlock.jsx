import { NavLink } from 'react-router-dom';
import css from './DialogNavBlock.module.css';

const DialogNavBlock = (props) => {
    return (
          <NavLink to={`/dialogs${props.to}`} className={css.dialogs_list_block}>{props.name}</NavLink>
    );
  }
  
  export default DialogNavBlock;