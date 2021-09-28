import logo from '../../../../../src/img/avatar.svg';
import css from './Post.module.css';

const Post = () => {
  return (
        <div>
            <div className="avatar">
                <img width="80" height="80" src={logo} alt="" />
            </div>
            post 1
            <button>like</button><button>dislike</button>
        </div>
  );
}

export default Post;