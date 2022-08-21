// @ts-ignore
import css from './Users.module.css';
import React from 'react';
import Paginator from '../common/Pagginator/Paginator';
import User from './User';
import UsersSearchForm from './UsersSearchForm';
import { FilterT, getUsers, unfollow, follow } from '../../redux/users-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFetching, getCurrentPage, getFilter, getFollowingInProgress, getPageSize, getSelectUsers, getTotalUsersCount, requestUsers,} from '../../redux/users-selectors';
import { useEffect } from 'react';
import { UserType } from '../../types/types';

type PropsTypes = {
}

const UsersList: React.FC<PropsTypes> = (props) => {
  
  const users = useSelector(getSelectUsers)
  const pageSize = useSelector(getPageSize)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const isFetching = useSelector(getIsFetching)
  const followingInProgress = useSelector(getFollowingInProgress)
  const filter = useSelector(getFilter)

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getUsers(currentPage, pageSize, filter));
  },[])

  const eunfollow = (userId:number) => {
    dispatch(unfollow(userId))
  }
  const efollow = (userId:number) => {
    dispatch(follow(userId))
  }

  const onPageChanged = (pageNumber: number) => {
    dispatch(getUsers(pageNumber, pageSize, filter));

  }

  const onFillterChanged = (filter: FilterT) => {
    dispatch(getUsers(1, pageSize, filter));
  }

  return (
    <div className={css.user_list}>
      <UsersSearchForm onFillterChanged={onFillterChanged}/>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize}/>
      <div>{users.map( (u:UserType) => <User follow={efollow} unfollow={eunfollow} followingInProgress={followingInProgress} user={u} key={u.id}/>)}</div>
    </div>
  );
}

export default UsersList;