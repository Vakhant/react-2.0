import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsDataMap = props.posts.map(post => <Post key={post.id} likeCounts={post.likeCounts} message={post.message} to={post.message} id={post.id}/>)
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

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[requiredField, maxLength10]} component={Textarea} name={'newPostText'} placeholder={'enter your message'} className={css.addpost_text_area}/>
      </div>
      <div><button>Add post</button></div>
    </form>
  );
}

const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

  
export default MyPosts;