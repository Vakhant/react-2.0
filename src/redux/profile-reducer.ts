import { stopSubmit, FormAction } from 'redux-form';
import { PhotosType, PostType, ProfileType } from "../types/types";
import { profileAPI } from '../api/profile-api';
import { InferActionsTypes, BaseThunkType } from './redux-store';

let initialState = {
    profile: null as ProfileType | null,
    posts: [
        {id: 1, likeCounts:4, message: "abracadabraa"},
        {id: 2, likeCounts:15, message: "abracadabra"},
        {id: 3, likeCounts:3, message: "abracadabr"},
        {id: 4, likeCounts:11, message: "abracadab"}
    ] as Array<PostType>,
    status: '',
    newPostText: ""
}
export type InitialStateType = typeof initialState

export const profileReducer = (state = initialState, action:ActionsTypes) => {
    switch(action.type){
        case 'sn/profile/ADD_POST':{
            return {
                ...state,
                posts: [...state.posts, {id:5, likeCounts: 25, message: action.newPostText}],
                newPostText: ""
            }
        }
        case 'sn/profile/SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
            case 'sn/profile/SET_STATUS':
                return {...state, status: action.status}
            case 'sn/profile/DELETE_POST':
                return {...state, posts: state.posts.filter(p=>p.id !== action.postId)}
            case 'sn/profile/SAVE_PHOTO_SUCCESS':
                return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state;
    }
}

export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: 'sn/profile/ADD_POST', newPostText} as const),
    setUserProfile:       (profile: ProfileType) => ({type: 'sn/profile/SET_USER_PROFILE', profile} as const),
    setStatus:            (status: string) => ({type: 'sn/profile/SET_STATUS', status} as const),
    deletePost:           (postId: number) => ({type: 'sn/profile/DELETE_POST', postId} as const),
    savePhotoSuccess:     (photos: PhotosType) => ({type: 'sn/profile/SAVE_PHOTO_SUCCESS', photos} as const)
}

export const getUserProfile = (userId:number):ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number):ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data));
}

export const updateStatus = (status: string):ThunkType => async (dispatch) => {
    try{
    let data = await profileAPI.updateProfile(status)
    
    if(data.resultCode === 0){
        dispatch(actions.setStatus(status));
    }
    }catch(error){debugger}
}

export const savePhoto = (file:File):ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    
    if(data.resultCode === 0){
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType):ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
    if(data.resultCode === 0){
        if(userId != null){
            dispatch(getUserProfile(userId));
        }else{
            throw new Error("userId can't be null")
        }
    }else{
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("edit-profile", {_error: message}));
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer;

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>