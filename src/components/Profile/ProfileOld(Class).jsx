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
    status: this.props.status
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
    this.props.updateStatus(this.state.status)
  }
  // onStatusChange = (val) => {
  //   this.setState({
  //     status: val
  //   })
  // }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
  }
  render(){
    return (
      <div>
        {!this.state.editMode &&
        <div onClick={this.activateEditMode.bind(this)}>{this.props.status || "Добавить статус"}</div>
        }
        {this.state.editMode &&
          <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status} type="text" />
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
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer store={props.store}/>
      </>
    );
}

export default Profile;