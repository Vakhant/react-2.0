const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, likeCounts:4, message: "abracadabraa"},
        {id: 2, likeCounts:15, message: "abracadabra"},
        {id: 3, likeCounts:3, message: "abracadabr"},
        {id: 4, likeCounts:11, message: "abracadab"}
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {id:5, likeCounts: 25, message: state.newPostText};
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default profileReducer;