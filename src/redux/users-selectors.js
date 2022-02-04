import { createSelector } from "reselect"


export const selectUsers         = state => state.usersPage.users
export const users               = state => selectUsers(state).filter(u=>true)
export const pageSize            = state => state.usersPage.pageSize
export const totalUsersCount     = state => state.usersPage.totalUsersCount
export const currentPage         = state => state.usersPage.currentPage
export const isFetching          = state => state.usersPage.isFetching
export const followingInProgress = state => state.usersPage.followingInProgres
//for hard selectors
export const usersSuperSelector = createSelector(selectUsers, pageSize, users => users(state).filter(u=>true)) //example
