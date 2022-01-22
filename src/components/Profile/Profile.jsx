import React from 'react';
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

class ProfileStatus extends React.Component{
  state = {
    editMode: false,
    status: 'fdfd'
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  render(){
    return (
      <div>
        {!this.state.editMode &&
        <div onClick={this.activateEditMode.bind(this)}>{this.state.status}</div>
        }
        {this.state.editMode &&
        <div autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}><input value={this.state.status} type="text" /></div>
        }
      </div>
    )
  }
}

const Profile = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
    return (
      <>
      <ProfileInfo profile={props.profile}/>
      <ProfileStatus/>
      <MyPostsContainer store={props.store}/>
      </>
    );
}

export default Profile;