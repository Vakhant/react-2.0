import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsers } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import UsersList from './UsersList';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
  users: Array<UserType>
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  getUsers: (pageNumber: number, pageSize: number) => void
  unfollow: (userId:number) => void
  follow: (userId:number) => void
}

type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType>{

  componentDidMount(){
    const {currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    const {pageSize} = this.props;
    this.props.getUsers(pageNumber, pageSize);

  }

  render(){
    
      return <>
        <h1>{this.props.pageTitle}</h1>
        {this.props.isFetching ? <Preloader/> : null}
        <UsersList
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
  }
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {follow, unfollow, getUsers}),
  // withAuthRedirect
)(UsersContainer)
