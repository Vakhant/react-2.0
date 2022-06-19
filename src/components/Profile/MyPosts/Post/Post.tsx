import logo from '../../../../../src/assets/img/avatar.svg';
import css from './Post.module.css';

type PropsT = {
  id: number
  message: string
  likeCounts: number
}

const Post:React.FC<PropsT> = (props) => {
  return (
        <div className={css.post}>
            <div className="avatar">
                <img width="80" height="80" src={logo} alt="" />
            </div>
            <div>post {props.id}</div>
            <div>{props.message}</div>
            <div className={css.post_nav}></div>
            <div><button>like {props.likeCounts}</button></div>
            <div><button>dislike</button></div>
            
            
        </div>
  );
}

export default Post;