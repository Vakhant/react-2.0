import MyPostsContainer from './MyPosts/MyPostsContainer';
import css from './Profile.module.css';

const Profile = (props) => {
  return (
    <>
      promo
      avatar
      comments
      <MyPostsContainer store={props.store}
      />
    </>
  );
}

export default Profile;