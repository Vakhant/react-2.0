import React from 'react';
import logo from '../../../../src/img/avatar.svg';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    {id: 1,likeCounts:4, message: "abracadabraa"},
    {id: 2,likeCounts:15, message: "abracadabra"},
    {id: 3,likeCounts:3, message: "abracadabr"},
    {id: 4,likeCounts:11, message: "abracadab"}
  ]
  let postsDataMap = postsData.map(post => <Post name={post.likeCounts} to={post.message} id={post.id}/>)
  let newPostElement = React.createRef();
  let addPost = () => {
    let newPost = {id:5, likeCounts: 25, message: "new"};
    postsData.push(newPost);
    let text = newPostElement.current.value;
    console.log(text);
  }
  return (
    <div>
        MyPosts
        <div>
            <textarea ref={newPostElement} className={css.addpost_text_area}></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
      <div className="posts_list">
        {postsDataMap}
      </div>
    </div>
  );
}

export default MyPosts;