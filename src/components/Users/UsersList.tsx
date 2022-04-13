// @ts-ignore
import css from './Users.module.css';
import React from 'react';
import Paginator from '../common/Pagginator/Paginator';
import User from './User';
import { UserType } from '../../types/types';

type PropsTypes = {
  unfollow: (userId:number) => void
  follow: (userId:number) => void
  followingInProgress: Array<number>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  users: Array<UserType>
}

const UsersList: React.FC<PropsTypes> = ({unfollow, follow, followingInProgress, pageSize, totalUsersCount, currentPage, onPageChanged, users, ...props}) => {
  return (
    <div className={css.user_list}>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize}/>
      <div>{users.map( u => <User follow={follow} unfollow={unfollow} followingInProgress={followingInProgress} user={u} key={u.id}/>)}</div>
    </div>
  );
}

export default UsersList;