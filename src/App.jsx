import React from 'react';
import css from './App.module.css';
import Aside from './components/Aside/Aside';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp();
  }

  render(){
    if(!this.props.initialized){
      return <Preloader/>
    }

    return (

      <div className="App">

        <HeaderContainer/>

          <main>
            <div className="wrap">
              <Aside/>
              <div className={css.content}>
                <Route path="/dialogs" render={() => <DialogsContainer />}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                <Route path="/users" render={() => <UsersContainer />}/>
                <Route path="/login" render={() => <Login />}/>
              </div>
            </div>
          </main>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
  ) (App)