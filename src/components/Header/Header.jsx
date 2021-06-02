import logo from '../../src/img/logo.svg';
import './Header.css';

const Header = () => {
  return (
      <header>
        <div className="wrap">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
      </header>
  );
}
  
export default Header;