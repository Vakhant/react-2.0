import React, { useState, FC } from 'react';
import Preloader from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import css from './Profile.module.css';
import userPhoto from '../../assets/img/avatar.svg'
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileDataFormReduxForm from './ProfileDataForm';
import { ProfileType, ContactsType } from '../../types/types';

type ProfileDataPropsT = {
  profile: ProfileType
  isOwner: boolean
  activateEditMode: () => void
}

const ProfileData: FC<ProfileDataPropsT> = ({profile, isOwner, activateEditMode}) => {
  return (
    <>
    {isOwner && <button onClick={activateEditMode}>edit</button>}
    <div><b>Full name:</b> {profile.fullName}</div>
      
    <div><b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
    <div><b>My proffesional skills:</b> {profile.lookingForAJobDescription}</div>
    <div><b>About me:</b> {profile.aboutMe}</div>
    <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => 
    <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />)}</div>
    </>
  )
}

type ContactPropsT = {
  contactTitle: string
  contactValue: string|null
}

const Contact: FC<ContactPropsT> = ({contactTitle, contactValue}) => {
  return <div className={css.contact_list}><b>{contactTitle}</b>: {contactValue}</div>
}

type ProfileInfoPropsT = {
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
  profile: ProfileType
  isOwner: boolean
  status: string
  updateStatus: (status: string) => void
}

const ProfileInfo: FC<ProfileInfoPropsT> = ({savePhoto, saveProfile, profile, isOwner, status, updateStatus}) => {
  
  let [editMode, setEditMode] = useState(false);
  const omMainPhotoSelected = (e:any) => {
    e.target.files.length && savePhoto(e.target.files[0])
  }
  
  const onSubmit = (formData: ProfileType) => {
    // todo: remove then
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
    console.log(formData)
  }
  return (
    <>
      <img className={css.user_photo} src={profile.photos.large || userPhoto} alt="" />
      {editMode ?
      <ProfileDataFormReduxForm profile={profile} initialValues={profile} onSubmit={onSubmit} deactivateEditMode={() => {setEditMode(false)}}/> :
      <ProfileData activateEditMode={() => {setEditMode(true)}} isOwner={isOwner} profile={profile}/>
      }      
      {isOwner && <input type={"file"} onChange={omMainPhotoSelected}/>}
      <div><b>Status:</b> <ProfileStatus status={status} updateStatus={updateStatus}/></div>
    </>
  )
}

type ProfilePropsT = ProfileInfoPropsT

const Profile: FC<ProfilePropsT & any> = ({savePhoto, saveProfile, profile, isOwner, status, updateStatus}) => {
  
  if(!profile){
    return <Preloader/>
  }
    return (
      <>
      <ProfileInfo  
      saveProfile={saveProfile}
      status={status} 
      updateStatus={updateStatus}
      savePhoto={savePhoto}
      isOwner={isOwner}
      profile={profile}/>
      
      <MyPostsContainer/>
      </>
    );
}

export default Profile;