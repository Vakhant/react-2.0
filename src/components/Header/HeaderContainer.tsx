import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

export type MapPropsType = {
  isAuth: boolean
  login: string | null
}
export type DispatchPropsT = {
  logout: () => void
}

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsT> {
  render(){
    return <Header {...this.props} />
  }
}
  
const mapStateToProps = (state:AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect<MapPropsType, DispatchPropsT, {}, AppStateType>(mapStateToProps, {logout})(HeaderContainer);