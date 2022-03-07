import React, { useState } from 'react';
import Preloader from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import css from './Profile.module.css';
import userPhoto from '../../assets/img/avatar.svg'
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileDataFormReduxForm from './ProfileDataForm';

const ProfileData = (props) => {
  return (
    <>
    {props.isOwner && <button onClick={props.activateEditMode}>edit</button>}
    <div><b>Full name:</b> {props.profile.fullName}</div>
      
    <div><b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}</div>
    <div><b>My proffesional skills:</b> {props.profile.lookingForAJobDescription}</div>
    <div><b>About me:</b> {props.profile.aboutMe}</div>
    <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => 
    <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />)}</div>
    </>
  )
}

const Contact = ({contactTitle, contactValue}) => {
  return <div className={css.contact_list}><b>{contactTitle}</b>: {contactValue}</div>
}

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);
  const omMainPhotoSelected = (e) => {
    e.target.files.length && props.savePhoto(e.target.files[0])
  }
  
  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false)
    })
    console.log(formData)
  }
  return (
    <>
      <img className={css.user_photo} src={props.profile.photos.large || userPhoto} alt="" />
      {editMode ?
      <ProfileDataFormReduxForm profile={props.profile} initialValues={props.profile} onSubmit={onSubmit} deactivateEditMode={() => {setEditMode(false)}}/> :
      <ProfileData activateEditMode={() => {setEditMode(true)}} isOwner={props.isOwner} profile={props.profile}/>
      }      
      {props.isOwner && <input type={"file"} onChange={omMainPhotoSelected}/>}
      <div><b>Status:</b> <ProfileStatus status={props.status} updateStatus={props.updateStatus}/></div>
    </>
  )
}

const Profile = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
    return (
      <>
      <ProfileInfo  
      saveProfile={props.saveProfile}
      status={props.status} 
      updateStatus={props.updateStatus}
      savePhoto={props.savePhoto}
      isOwner={props.isOwner}
      profile={props.profile}/>
      
      <MyPostsContainer store={props.store}/>
      </>
    );
}

export default Profile;