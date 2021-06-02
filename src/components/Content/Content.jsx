import css from './Content.module.css';

const Content = () => {
  return (
    <div className={css.content}>
      promo
      avatar
      comments
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>btn</button>
      posts
    </div>
  );
}

export default Content;