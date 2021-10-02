import logo from '../../../../src/img/avatar.svg';
import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
        MyPosts
        <div>
            <textarea className={css.addpost_text_area}></textarea>
            <button>Add post</button>
        </div>
      <div className="posts_list">
        <Post likeCounts="4" message="abracadabraab"/>
        <Post likeCounts="15" message="abracadabraa"/>
        <Post likeCounts="3" message="abracadabra"/>
        <Post likeCounts="11" message="abracadabr"/>
      </div>
    </div>
  );
}

export default MyPosts;