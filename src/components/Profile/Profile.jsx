import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import css from './Profile.module.css';
import userPhoto from '../../assets/img/avatar.svg'
import ProfileStatus from './ProfileStatus/ProfileStatus';


const ProfileInfo = (props) => {
  const omMainPhotoSelected = (e) => {
    e.target.files.length && props.savePhoto(e.target.files[0])
  }
  return (
    <>
      <img className={css.user_photo} src={props.profile.photos.large || userPhoto} alt="" />
      {props.isOwner && <input type={"file"} onChange={omMainPhotoSelected}/>}
    </>
  )
}

const Profile = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
    return (
      <>
      <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}/>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer store={props.store}/>
      </>
    );
}

export default Profile;