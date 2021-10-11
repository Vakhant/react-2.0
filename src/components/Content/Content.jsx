import { Route } from 'react-router';
import css from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';

const Content = (props) => {
  return (
      <div className={css.content}>
        <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
        <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost}  updateNewPostText={props.updateNewPostText}/>}/>
      </div>
  );
}

export default Content;