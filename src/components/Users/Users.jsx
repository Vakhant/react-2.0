import css from './Users.module.css';
import avatar from '../../assets/img/avatar.svg'
import React from 'react';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  console.log(pages);
  
  return (
    <div className={css.user_list}>
      <div>
        {pages.map(p => {
          return <span className={css.page_number + ` ${props.currentPage === p && css.selectedPage}`}
          onClick={(e) => props.onPageChanged(p)}>{p}</span>
        })}
      </div>
      {
        props.users.map( u => <div className={css.user_block} key={u.id}>
            <div className={css.user_logo}><img src={u.photos.small != null ? u.photos.small : avatar} alt="" /></div>
            <div className="user_full_name">
              {u.name}
            </div>
            <div className="user_status">
              {u.status}
            </div>
            {u.followed ? 
            <button onClick={()=>props.unfollow(u.id)}>follow</button> :
            <button onClick={()=>props.follow(u.id)}>unfollow</button>
            }
          </div>
        )
      }
    </div>
  );
}

export default Users;