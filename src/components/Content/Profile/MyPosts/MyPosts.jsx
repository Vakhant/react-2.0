import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import logo from '../../../../src/img/avatar.svg';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  console.log(props.state);
  let postsDataMap = props.state.posts.map(post => <Post likeCounts={post.likeCounts} message={post.message} to={post.message} id={post.id}/>)
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action);
  }

  // let onPostChange = () =>{
  // }

  return (
    <div>
        MyPosts
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} className={css.addpost_text_area} value={props.state.newPostText}></textarea>
        </div>
        <div><button onClick={addPost}>Add post</button></div>
      <div className="posts_list">
        {postsDataMap}
      </div>
    </div>
  );
}
  
export default MyPosts;