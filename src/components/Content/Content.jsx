import { Route } from 'react-router';
import css from './Content.module.css';
import DialogsContainer from './Dialogs/DialogsContainer';
import Profile from './Profile/Profile';

const Content = (props) => {
  return (
      <div className={css.content}>
        <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
        <Route path="/profile" render={() => <Profile store={props.store}/>}/>
      </div>
  );
}

export default Content;