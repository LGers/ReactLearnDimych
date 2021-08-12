import profileReduser, {addPostAC, deletePostAC} from "./profile-reducer";


//1. start test data (state)
let state = {
    dataPosts: [
        {id: '1', message: 'hi Data', name: 'alik1', age: 15, likesCount: 15},
        {id: '2', message: 'How are You', name: 'alik2', age: 156, likesCount: 5},
        {id: '3', message: 'I\'m a best react production', name: 'alik3', age: 157, likesCount: 3},
        {id: '4', message: 'I\'m a best react production1', name: 'alik4', age: 158, likesCount: 7},
        {id: '5', message: 'I\'m a best react production4', name: 'alik5', age: 159, likesCount: 6}
    ]
};


test('profileReduser test. New post should be  added. Length of posts should be incremented', () => {

    let action= addPostAC('Leonid is the best React JS')
    //2. make action
    let newState = profileReduser(state,action)
    //3. expectation  1 2 3 4 5 6 7 8 9 0
    expect(newState.dataPosts.length).toBe(6)
});
test('profileReduser test. message test', () => {

    let action= addPostAC('Leonid is the best React JS')
    //2. make action
    let newState = profileReduser(state,action)
    //3. expectation  1 2 3 4 5 6 7 8 9 0
    expect(newState.dataPosts[5].message).toBe('Leonid is the best React JS')
});

test('after deleting length of messages should be decrement', () => {

    let action= deletePostAC(1)
    //2. make action
    let newState = profileReduser(state,action)
    //3. expectation  1 2 3 4 5 6 7 8 9 0
    expect(newState.dataPosts.length).toBe(4)
});
test('after deleting length of messages should not be decrement if id incorrect', () => {

    let action= deletePostAC(1000)
    //2. make action
    let newState = profileReduser(state,action)
    //3. expectation  1 2 3 4 5 6 7 8 9 0
    expect(newState.dataPosts.length).toBe(5)
});