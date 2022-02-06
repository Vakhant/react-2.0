import React, { useState } from 'react';
import { useEffect } from 'react';
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

const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus]     = useState(props.status);

  useEffect(() => setStatus(props.status), [props.status])

  const activateEditMode = () => setEditMode(true)

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }
  
  const onStatusChange = (e) => setStatus(e.currentTarget.value)
  
    return (
      <div>
        {!editMode &&
        <div onClick={activateEditMode}>{props.status || "Добавить статус"}</div>
        }
        {editMode &&
          <input onChange={onStatusChange} onBlur={deactivateEditMode} value={status} type="text" />
        }
      </div>
    )
}

const Profile = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
    return (
      <>
      <ProfileInfo profile={props.profile}/>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer store={props.store}/>
      </>
    );
}

export default Profile;