import React from 'react';
import { Field, reduxForm } from 'redux-form';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsDataMap = props.posts.map(post => <Post likeCounts={post.likeCounts} message={post.message} to={post.message} id={post.id}/>)
  let addPost = (vals) => {
    props.addPost(vals.newPostText);
  }

  return (
    <div>
        <h3>MyPosts</h3>
        <AddNewPostReduxForm onSubmit={addPost}/>
      <div className="posts_list">
        {postsDataMap}
      </div>
    </div>
  );
}

const AddNewPostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'textarea'} name={'newPostText'} placeholder={'enter your message'} className={css.addpost_text_area}/>
      </div>
      <div><button>Add post</button></div>
    </form>
  );
}

const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

  
export default MyPosts;