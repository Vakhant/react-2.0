import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import css from './Header.module.css';

const Header = (props) => {
  return (
      <header>
        <div className="wrap">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="lgn_block">
            {props.isAuth ?
              <div>{props.login + " "} <button onClick={props.logout}>logout</button></div> :
              <NavLink to={'/login'}>Login</NavLink>}
          </div>
        </div>
      </header>
  );
}
  
export default Header;