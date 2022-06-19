import { NavLink } from 'react-router-dom';
import css from './DialogNavBlock.module.css';

type PropsT = {
      to: string
      name: string
      id: number
}

const DialogNavBlock: React.FC<PropsT> = (props) => {
      return (
          <NavLink to={`/dialogs${props.to}`} className={css.dialogs_list_block}>{props.name}</NavLink>
      );
}

export default DialogNavBlock;