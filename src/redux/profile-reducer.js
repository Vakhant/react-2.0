import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    profile: null,
    posts: [
        {id: 1, likeCounts:4, message: "abracadabraa"},
        {id: 2, likeCounts:15, message: "abracadabra"},
        {id: 3, likeCounts:3, message: "abracadabr"},
        {id: 4, likeCounts:11, message: "abracadab"}
    ],
    status: ''
}

export const profileReducer = (state = initialState, action) => {
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
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateProfile(status).then(response => {
        if(response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
    })
}

export default profileReducer;