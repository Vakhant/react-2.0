import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsDataMap = props.posts.map(post => <Post likeCounts={post.likeCounts} message={post.message} to={post.message} id={post.id}/>)
  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  // let onPostChange = () =>{
  // }

  return (
    <div>
        MyPosts
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} className={css.addpost_text_area} value={props.newPostText}></textarea>
        </div>
        <div><button onClick={addPost}>Add post</button></div>
      <div className="posts_list">
        {postsDataMap}
      </div>
    </div>
  );
}
  
export default MyPosts;