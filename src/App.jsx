import css from './App.module.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (

    <div className="App">

      <Header/>

        <main>
          <div className="wrap">
            <Aside/>
            <div className={css.content}>
              <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
              <Route path="/profile" render={() => <Profile store={props.store}/>}/>
              <Route path="/users" render={() => <UsersContainer store={props.store}/>}/>
            </div>
          </div>
        </main>

    </div>
  );
}

export default App;