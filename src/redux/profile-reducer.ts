import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";
import { PhotosType, PostType, ProfileType } from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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

export const profileReducer = (state = initialState, action:any) => {
    switch(action.type){
        case ADD_POST:{
            return {
                ...state,
                posts: [...state.posts, {id:5, likeCounts: 25, message: action.newPostText}],
                newPostText: ""
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
            case SET_STATUS:
                return {...state, status: action.status}
                case DELETE_POST:
                    return {...state, posts: state.posts.filter(p=>p.id !=  action.postId)}
                    case SAVE_PHOTO_SUCCESS:
                        return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state;
    }
}

type AddPostActionCreatorType = {type: typeof ADD_POST, newPostText: string}
type SetUserProfileType =       {type: typeof SET_USER_PROFILE, profile: ProfileType}
type SetStatusType =            {type: typeof SET_STATUS, status: string}
type DeletePostType =           {type: typeof DELETE_POST, postId: number}
type SavePhotoSuccessType =     {type: typeof SAVE_PHOTO_SUCCESS, photos: PhotosType}
export const addPostActionCreator = (newPostText: string):AddPostActionCreatorType =>   ({type: ADD_POST, newPostText})
export const setUserProfile =       (profile: ProfileType):SetUserProfileType =>        ({type: SET_USER_PROFILE, profile})
export const setStatus =            (status: string): SetStatusType =>                  ({type: SET_STATUS, status})
export const deletePost =           (postId: number):DeletePostType =>                  ({type: DELETE_POST, postId})
export const savePhotoSuccess =     (photos: PhotosType):SavePhotoSuccessType =>        ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number) => async (dispatch:any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch:any) => {
    try{
    let response = await profileAPI.updateProfile(status)
    
    if(response.data.resultCode === 0){
        dispatch(setStatus(status));
    }
    }catch(error){debugger}
}

export const savePhoto = (file:any) => async (dispatch:any) => {
    let response = await profileAPI.savePhoto(file)
    
    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch:any, getState:any) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if(response.data.resultCode === 0){
        dispatch(getUserProfile(userId));
    }else{
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("edit-profile", {_error: message}));
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer;