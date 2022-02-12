import css from './Users.module.css';
import React from 'react';
import Paginator from '../common/Pagginator/Paginator';
import User from './User';

const UsersList = ({unfollow, follow, followingInProgress, pageSize, totalUsersCount, currentPage, onPageChanged, users, ...props}) => {
  return (
    <div className={css.user_list}>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
      <div>{users.map( u => <User follow={follow} unfollow={unfollow} followingInProgress={followingInProgress} user={u} key={u.id}/>)}</div>
    </div>
  );
}

export default UsersList;