import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import { Provider, connect } from 'react-redux';
import store from './redux/redux-store';
import css from './App.module.css';
import Preloader from './components/common/Preloader/Preloader';
import Aside from './components/Aside/Aside';
import Login from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

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

let AppConteiner = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
  ) (App)

let AppWrap = (props) => {
  return <BrowserRouter>
        <Provider store={store}>
            <AppConteiner/>
        </Provider>
  </BrowserRouter>
}

export default AppWrap;