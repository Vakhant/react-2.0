import css from './Content.module.css';
import Profile from './Profile/Profile';

const Content = () => {
  return (
    <div className={css.content}>
      <Profile/>
    </div>
  );
}

export default Content;