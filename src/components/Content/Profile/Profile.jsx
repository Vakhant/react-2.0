import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';

const Profile = (props) => {
  console.log(props.state)
  return (
    <>
      promo
      avatar
      comments
      <MyPosts state={props.state} addPost={props.addPost}/>
    </>
  );
}

export default Profile;