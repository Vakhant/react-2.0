import { Dispatch } from "redux";
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/objects-helper";
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { usersAPI } from '../api/users-api';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> // array of users ids
}

export const usersReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
    switch(action.type){
            case 'FOLLOW':
                return {
                    ...state,
                    users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
            case 'UNFOLLOW':
                return {
                    ...state,
                    users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
            case 'SET_USERS':{
                return {...state, users: action.users}
            }
            case 'SET_CURRENT_PAGE':{
                return {...state, currentPage: action.currentPage}
            }
            case 'SET_TOTAL_USERS_COUNT':{
                return {...state, totalUsersCount: action.totalCount}
            }
            case 'TOGGLE_IS_FETCHING':{
                return {...state, isFetching: action.isFetching}
            }
            case 'TOGGLE_FOLLOWING_IN_PROGRESS':{
                return {...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)}
            }
        default:
            return state;
        }
}

//action-creators AC
export const actions = {
    followSuccess:            (userId:number) => ({type: 'FOLLOW', userId})as const,
    unfollowSuccess:          (userId:number) => ({type: 'UNFOLLOW', userId})as const,
    setUsers:                 (users:Array<UserType>) => ({type: 'SET_USERS', users})as const,
    setCurrentPage:           (currentPage:number) => ({type: 'SET_CURRENT_PAGE', currentPage})as const,
    setTotalUsersCount:       (totalCount:number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount})as const,
    toggleIsFetching:         (isFetching:boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching})as const,
    toggleFollowinInProgress: (isFetching:boolean, userId:number) => ({type: 'TOGGLE_FOLLOWING_IN_PROGRESS', isFetching, userId}as const)
}
//ThunkCreator



export const getUsers = (currentPage:number, pageSize:number): ThunkType => async (dispatch: DispatchType) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(currentPage));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
}

const _followUnfollowFlow = async (dispatch:DispatchType, userId:number, apiMethod:any, ac:(userId:number)=>ActionsTypes) => {
    dispatch(actions.toggleFollowinInProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0){
      dispatch(ac(userId))
    };
    dispatch(actions.toggleFollowinInProgress(false, userId));
}

export const follow = (userId:number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
    }
}

export const unfollow = (userId:number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
    }
}

export default usersReducer;
type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = BaseThunkType<ActionsTypes>