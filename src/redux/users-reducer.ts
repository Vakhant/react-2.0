import { RootStateOrAny } from "react-redux";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/api";
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/objects-helper";
import { AppStateType } from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> // array of users ids
}
type InitialStateType = typeof initialState

export const usersReducer = (state = initialState, action: ActionsTypes):InitialStateType => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
            case SET_USERS:{
                return {...state, users: action.users}
            }
            case SET_CURRENT_PAGE:{
                return {...state, currentPage: action.currentPage}
            }
            case SET_TOTAL_USERS_COUNT:{
                return {...state, totalUsersCount: action.totalCount}
            }
            case TOGGLE_IS_FETCHING:{
                return {...state, isFetching: action.isFetching}
            }
            case TOGGLE_FOLLOWING_IN_PROGRESS:{
                return {...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id =>  id != action.userId)}
            }
        default:
            return state;
        }
}
type ActionsTypes = FollowSuccessType|UnfollowSuccessType|SetUsersType|SetCurrentPageType|SetTotalUsersCountType|ToggleIsFetchingType|ToggleFollowinInProgressType
type FollowSuccessType =            {type: typeof FOLLOW, userId: number}
type UnfollowSuccessType =          {type: typeof UNFOLLOW, userId: number}
type SetUsersType =                 {type: typeof SET_USERS, users:Array<UserType>}
type SetCurrentPageType =           {type: typeof SET_CURRENT_PAGE, currentPage:number}
type SetTotalUsersCountType =       {type: typeof SET_TOTAL_USERS_COUNT, totalCount:number}
type ToggleIsFetchingType =         {type: typeof TOGGLE_IS_FETCHING, isFetching:boolean}
type ToggleFollowinInProgressType = {type: typeof TOGGLE_FOLLOWING_IN_PROGRESS, isFetching:boolean, userId:number}
//action-creators AC
export const followSuccess =            (userId:number):FollowSuccessType => ({type: FOLLOW, userId})
export const unfollowSuccess =          (userId:number):UnfollowSuccessType => ({type: UNFOLLOW, userId})
export const setUsers =                 (users:Array<UserType>):SetUsersType => ({type: SET_USERS, users})
export const setCurrentPage =           (currentPage:number):SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount =       (totalCount:number):SetTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching =         (isFetching:boolean):ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowinInProgress = (isFetching:boolean, userId:number):ToggleFollowinInProgressType => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId})

//ThunkCreator
type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUsers = (currentPage:number, pageSize:number) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const _followUnfollowFlow = async (dispatch:DispatchType, userId:number, apiMethod:any, ac:(userId:number)=>FollowSuccessType|UnfollowSuccessType) => {
    dispatch(toggleFollowinInProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode == 0){
      dispatch(ac(userId))
    };
    dispatch(toggleFollowinInProgress(false, userId));
}

export const follow = (userId:number): ThunkType => {
    return async (dispatch, getState) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}

export const unfollow = (userId:number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}

export default usersReducer;