import { NavLink } from 'react-router-dom';
import css from './Aside.module.css';

const Aside = () => {
  return (
    <aside>
      <nav>
        <NavLink className={css.nav_block} to="/Profile" activeClassName={css.nav_block_active}>Profile</NavLink>
        <NavLink className={css.nav_block} to="/Dialogs"  activeClassName={css.nav_block_active}>Dialogs</NavLink>
        <NavLink className={css.nav_block} to="News" activeClassName={css.nav_block_active}>News</NavLink>
        <NavLink className={css.nav_block} to="Music" activeClassName={css.nav_block_active}>Music</NavLink>
        <div className="hr"></div>
        <NavLink className={css.nav_block} to="Settings" activeClassName={css.nav_block_active}>Settings</NavLink>
      </nav>
    </aside>
  );
}

export default Aside;