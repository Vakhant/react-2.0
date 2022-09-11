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
import * as queryString from 'querystring'
import { useHistory } from 'react-router-dom';

type PropsTypes = {
}

type QuertParamsType = {term?: string; page?:string; friend?:string}

const UsersList: React.FC<PropsTypes> = (props) => {
  
  const users = useSelector(getSelectUsers)
  const pageSize = useSelector(getPageSize)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const isFetching = useSelector(getIsFetching)
  const followingInProgress = useSelector(getFollowingInProgress)
  const filter = useSelector(getFilter)

  const dispatch = useDispatch()
  const history = useHistory()
  
  useEffect(()=>{
    const queryString = require('querystring');
    let parsed = queryString.parse(history.location.search.substr(1)) as QuertParamsType
    

    let actualPage = currentPage
    let actualFilter = filter

    if(!!parsed.page) actualPage = Number(parsed.page)

    if(!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

    switch(parsed.friend){
      case "null":
        actualFilter = {...actualFilter, friend: null}
        break
      case 'true':
        actualFilter = {...actualFilter, friend: true}
        break
      case 'false':
        actualFilter = {...actualFilter, friend: false}
        break
    }
    
    dispatch(getUsers(actualPage, pageSize, actualFilter));
  },[])
  
  useEffect(()=>{
    
    const query: QuertParamsType = {}
    if(!!filter.term) query.term = filter.term 
    if(filter.friend !== null) query.friend = String(filter.friend) 
    if(currentPage !== 1) query.page = String(currentPage)

    history.push({
      pathname: "/users",
      search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
    });
  },[filter, currentPage])

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
    console.log(filter);
    
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