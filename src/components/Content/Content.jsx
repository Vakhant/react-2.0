import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import css from './Content.module.css';
import Dialogs from './Dialogs/Dialogs';
import Profile from './Profile/Profile';

const Content = () => {
  return (
    <BrowserRouter>
      <div className={css.content}>
        <Route path="/dialogs" component={Dialogs}/>
        <Route path="/profile" component={Profile}/>
      </div>
    </BrowserRouter>
  );
}

export default Content;