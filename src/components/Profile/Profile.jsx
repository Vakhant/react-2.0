import Preloader from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import css from './Profile.module.css';

const ProfileInfo = (props) => {
  return (
    <>
      <img src={props.profile.photos.large} alt="" />
      avatar
      comments
    </>
  )
}

const Profile = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
    return (
      <>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer store={props.store}/>
      </>
    );
}

export default Profile;