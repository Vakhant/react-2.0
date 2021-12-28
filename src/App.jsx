import css from './App.module.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (

    <div className="App">

      <Header/>

        <main>
          <div className="wrap">
            <Aside/>
            <div className={css.content}>
              <Route path="/dialogs" render={() => <DialogsContainer />}/>
              <Route path="/profile" render={() => <ProfileContainer />}/>
              <Route path="/users" render={() => <UsersContainer />}/>
            </div>
          </div>
        </main>

    </div>
  );
}

export default App;