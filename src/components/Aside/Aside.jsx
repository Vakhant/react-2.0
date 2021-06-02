import css from './Aside.module.css';

const Aside = () => {
  return (
    <aside>
      <nav>
        <a className={css.nav_block} href="">Profile</a>
        <a className={`css.nav_block css.nav_block_active`} href="">Message</a>
        <a className={css.nav_block} href="">News</a>
        <a className={css.nav_block} href="">Music</a>
        <div className="hr"></div>
        <a className={css.nav_block} href="">Settings</a>
      </nav>
    </aside>
  );
}

export default Aside;