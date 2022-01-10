import css from './Users.module.css';
import avatar from '../../assets/img/avatar.svg'
import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { toggleIsFetching } from './../../redux/users-reducer';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
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
            <div className={css.user_logo}>
              <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : avatar} alt="" />
              </NavLink>
            </div>
            <div className="user_full_name">
              {u.name}
            </div>
            <div className="user_status">
              {u.status}
            </div>
            {u.followed ? 
            <button disabled={props.followingInProgress.some(id =>  id === u.id)} onClick={
              ()=>{
                props.toggleFollowinInProgress(true, u.id);
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true, headers: {
                  "API-KEY": "7967410f-c0f5-4382-8f4d-5fcf4925ba63" 
                }}).then(response => {
                  if (response.data.resultCode == 0){
                    props.unfollow(u.id)
                  };
                  props.toggleFollowinInProgress(false, u.id);
                })
              }
            }>unfollow</button> :
            <button disabled={props.followingInProgress.some(id =>  id === u.id)} onClick={
              ()=>{
                props.toggleFollowinInProgress(true, u.id);
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true, headers: {
                  "API-KEY": "7967410f-c0f5-4382-8f4d-5fcf4925ba63" 
                }}).then(response => {
                  if (response.data.resultCode == 0){
                    props.follow(u.id)
                  };
                  props.toggleFollowinInProgress(false, u.id);
                })
              }
            }>follow</button>
            }
          </div>
        )
      }
    </div>
  );
}

export default Users;