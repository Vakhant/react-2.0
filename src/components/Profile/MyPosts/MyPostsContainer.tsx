import { connect } from 'react-redux';
import MyPosts, { DispatchPropsT, MapPropsT } from './MyPosts';
import { AppStateType } from '../../../redux/redux-store';
import { actions } from '../../../redux/profile-reducer';

let mapStateToProps = (state:AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const MyPostsContainer = connect<MapPropsT, DispatchPropsT, {}, AppStateType>(mapStateToProps, {
  addPost: actions.addPostActionCreator
}
)(MyPosts);

  
export default MyPostsContainer;