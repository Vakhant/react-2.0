import React, { Suspense } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
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
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
  catchAllUnhadledErrors = (reason, promise) => {
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
                  <Route exact path="/" render={() => {<Redirect to="/profile"/>}}/>
                  <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                  <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                  <Route path="/users" render={<UsersContainer pageTitle={"Users"}/>}/>
                  <Route path="/login" render={withSuspense(Login)}/>
                  <Route path="*" render={() => {<div>404 not found</div>}}/>
                </Switch>
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