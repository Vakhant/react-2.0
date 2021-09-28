import logo from '../../../../src/img/avatar.svg';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
        MyPosts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
      <div className="posts_list">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
}

export default MyPosts;