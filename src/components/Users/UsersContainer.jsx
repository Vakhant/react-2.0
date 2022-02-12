import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, toggleFollowinInProgress, unfollow, getUsers } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import UsersList from './UsersList';

class UsersContainer extends React.Component{

  componentDidMount(){
    const {currentPage, pageSize, getUsers} = this.props;
    getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const {pageSize, getUsers} = this.props;
    getUsers(pageNumber, this.props.pageSize);

  }

  render(){
    
      return <>
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

let mapStateToProps = (state) => {
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
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowinInProgress, getUsers}),
  // withAuthRedirect
)(UsersContainer)
