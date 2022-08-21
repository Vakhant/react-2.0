import css from './Users.module.css';
import avatar from '../../assets/img/avatar.svg'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../types/types';
import { FilterT } from '../../redux/users-reducer';
import { useSelector } from 'react-redux';

type PropsType = {
  user: UserType
  unfollow: (userId:number) => void
  follow: (userId:number) => void
  followingInProgress: Array<number>
}

const User: React.FC<PropsType> = ({user, unfollow, follow, followingInProgress, ...props}) => {
  

  return (
    <div className={css.user_block} key={user.id}>
            <div className={css.user_logo}>
              <NavLink to={'/profile/' + user.id}>
              <img src={user.photos.small != null ? user.photos.small : avatar} alt="" />
              </NavLink>
            </div>
            <div className="user_full_name">
              {user.name}
            </div>
            <div className="user_status">
              {user.status}
            </div>
            {user.followed ? 
            <button disabled={followingInProgress.some(id => id === user.id)} onClick={
              ()=>{
                unfollow(user.id);
              }
            }>unfollow</button> :
            <button disabled={followingInProgress.some(id => id === user.id)} onClick={
              ()=>{
                follow(user.id);
              }
            }>follow</button>
            }
          </div>
  );
}

export default User;