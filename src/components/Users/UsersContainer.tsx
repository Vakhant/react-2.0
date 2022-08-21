import React from 'react';
import { useSelector } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import UsersList from './UsersList';
import { getIsFetching } from '../../redux/users-selectors';

type UsersPagePT = {
  pageTitle: string
}
const UsersPage: React.FC<UsersPagePT> = (props) => {
    
const isFetching = useSelector(getIsFetching)

  return <>
    <h1>{props.pageTitle}</h1>
    {isFetching ? <Preloader/> : null}
    <UsersList/>
  </>
}

export default UsersPage;