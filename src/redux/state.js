let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, likeCounts:4, message: "abracadabraa"},
                {id: 2, likeCounts:15, message: "abracadabra"},
                {id: 3, likeCounts:3, message: "abracadabr"},
                {id: 4, likeCounts:11, message: "abracadab"}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id:"1", to:"/taras", name: "Taras"},
                {id:"2", to:"/sania", name: "Sania"},
                {id:"3", to:"/vasiania", name: "Vasiania"},
                {id:"4", to:"/tania", name: "Tania"},
                {id:"5", to:"/rita", name: "Rita"}
            ],
            messagesData: [
                {id: 1, messageText: "Привет как дела"},
                {id: 2, messageText: "Как твое It"},
                {id: 3, messageText: "Еще не ахти?"}
            ]
        },
        sidebar: {}
    },
    _callSubscriber(){
        console.log("State changed");
    },
    getState(){
        return this._state;
    },
    subscriber(observer){
      this._callSubscriber = observer; //паттерн - observer
    },
      dispatch(action){
        if(action.type === 'ADD-POST'){
            let newPost = {id:5, likeCounts: 25, message: this._state.profilePage.newPostText};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
      }
}

export default store;
window.store = store;