import './Aside.css';

const Aside = () => {
  return (
    <aside>
      <nav>
        <a className="nav_block" href="">Profile</a>
        <a className="nav_block" href="">Message</a>
        <a className="nav_block" href="">News</a>
        <a className="nav_block" href="">Music</a>
        <div className="hr"></div>
        <a className="nav_block" href="">Settings</a>
      </nav>
    </aside>
  );
}

export default Aside;