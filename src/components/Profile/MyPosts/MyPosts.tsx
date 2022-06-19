import React, { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { PostType } from '../../../types/types';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import css from './MyPosts.module.css';
import Post from './Post/Post';

export type MapPropsT = {
  posts: Array<PostType>
}
export type DispatchPropsT = {
  addPost: (newPostText: string) => void
}

const MyPosts: FC<MapPropsT&DispatchPropsT> = (props) => {
  let postsDataMap = props.posts.map(post => <Post key={post.id} likeCounts={post.likeCounts} message={post.message} id={post.id}/>)
  let addPost = (vals:any) => {
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

type PropsType = {

}

type AddPostFormValuesT = {
  newPostText: string
}

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesT, PropsType> & PropsType> = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[requiredField, maxLength10]} component={Textarea} name={'newPostText'} placeholder={'enter your message'} className={css.addpost_text_area}/>
      </div>
      <div><button>Add post</button></div>
    </form>
  );
}

const AddNewPostReduxForm = reduxForm<AddPostFormValuesT, PropsType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

  
export default MyPosts;