import { createSelector } from "reselect"


export const getSelectUsers         = state => state.usersPage.users
export const getPageSize            = state => state.usersPage.pageSize
export const getTotalUsersCount     = state => state.usersPage.totalUsersCount
export const getCurrentPage         = state => state.usersPage.currentPage
export const getIsFetching          = state => state.usersPage.isFetching
export const getFollowingInProgress = state => state.usersPage.followingInProgress
export const getFilter              = state => state.usersPage.filter

export const requestUsers           = state => state.usersPage.filter(u=>true)

//for hard selectors
// export const usersSuperSelector = 
// createSelector(selectUsers, pageSize, users => users(state).filter(u=>true)) example
