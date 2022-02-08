import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        {id: 1, likeCounts:4, message: "abracadabraa"},
        {id: 2, likeCounts:15, message: "abracadabra"},
        {id: 3, likeCounts:3, message: "abracadabr"},
        {id: 4, likeCounts:11, message: "abracadab"}
    ]
}

test('lenght of posts should beincremented', () => {
    // 1. test data
    let action = addPostActionCreator("itsdsdsdsd")
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(5)
});

test('message of new post should correct', () => {
    // 1. test data
    let action = addPostActionCreator("itsdsdsdsd")
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[4].message).toBe("itsdsdsdsd")
});

test('after deleting length of message shound be decrist', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3)
});