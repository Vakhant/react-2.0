import React, { ComponentType } from 'react';
import { BrowserRouter, Route, Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import { Provider, connect } from 'react-redux';
import store from './redux/redux-store';
import css from './App.module.css';
import Preloader from './components/common/Preloader/Preloader';
import Aside from './components/Aside/Aside';
import Login from './components/Login/Login';
import HeaderContainer from './components/Header/HeaderContainer';
import { withSuspense } from './hocs/withSuspense';
import { Switch } from 'react-router-dom';
import { AppStateType } from './redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersPage = React.lazy(() => import('./components/Users/UsersContainer'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedUsers = withSuspense(UsersPage)

class App extends React.Component<MapPropsType & DispatchPropsType> {
  catchAllUnhadledErrors = () => {
    alert("some error occured")
  }
  componentDidMount(){
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhadledErrors)
  }
  componentWillUnmount(){
    window.removeEventListener("unhandledrejection", this.catchAllUnhadledErrors)
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
                <Switch>
                  <Route exact path="/" render={():any => {<Redirect to="/profile"/>}}/>
                  <Route path="/dialogs" render={() => <SuspendedDialogs/>}/>
                  <Route path="/profile/:userId?" render={() => <SuspendedProfile/>}/>
                  <Route path="/users" render={() => <SuspendedUsers pageTitle={"Users"}/>}/>
                  <Route path="/login" render={withSuspense(Login)}/>
                  <Route path="/chat" render={withSuspense(ChatPage)}/>
                  <Route path="*" render={():any => {<div>404 not found</div>}}/>
                </Switch>
              </div>
            </div>
          </main>

      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

let AppConteiner = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
  ) (App)

let AppWrap: React.FC = () => {
  return <BrowserRouter>
        <Provider store={store}>
            <AppConteiner/>
        </Provider>
  </BrowserRouter>
}

export default AppWrap;