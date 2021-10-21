import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import Post from './Post/Post';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    // props.addPost();
    props.store.dispatch(addPostActionCreator());
  }
  let updateNewPostText = (text) => {
    // props.updateNewPostText(text);
    let action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action);
  }

  return (
    <MyPosts 
       posts={state.profilePage.posts}
       newPostText={state.profilePage.newPostText}
       addPost={addPost}
       updateNewPostText={updateNewPostText}
       />
  );
}
  
export default MyPostsContainer;