import { NavLink } from 'react-router-dom';
import css from './Aside.module.css';

const Aside:React.FC = () => {
  return (
    <aside>
      <nav>
        <NavLink className={css.nav_block} to="/Profile" activeClassName={css.nav_block_active}>Profile</NavLink>
        <NavLink className={css.nav_block} to="/Dialogs"  activeClassName={css.nav_block_active}>Dialogs</NavLink>
        <NavLink className={css.nav_block} to="/users" activeClassName={css.nav_block_active}>Users</NavLink>
        <div className="hr"></div>
        <NavLink className={css.nav_block} to="Settings" activeClassName={css.nav_block_active}>Settings</NavLink>
      </nav>
    </aside>
  );
}

export default Aside;