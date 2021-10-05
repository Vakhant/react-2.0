import { Route } from 'react-router';
import css from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';

const Content = () => {
  return (
      <div className={css.content}>
        <Route path="/dialogs" render={() => <Dialogs />}/>
        <Route path="/profile" render={() => <Profile />}/>
      </div>
  );
}

export default Content;