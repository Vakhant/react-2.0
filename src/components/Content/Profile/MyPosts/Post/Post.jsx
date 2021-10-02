import logo from '../../../../../src/img/avatar.svg';

const Post = (props) => {
  return (
        <div>
            <div className="avatar">
                <img width="80" height="80" src={logo} alt="" />
            </div>
            post 1 <br />
            {props.message}
            <button>like {props.likeCounts}</button><button>dislike</button>
        </div>
  );
}

export default Post;