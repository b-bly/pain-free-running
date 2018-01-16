import axios from 'axios';
const url = 'http://localhost:5000/register';

export default function postNewUser(userInfo) {
    return dispatch => {
        console.log('postNewUser action user: ');
        console.log(userInfo);
        axios.post(url, userInfo).then(res => {
            console.log('postNewUser action res.data');
            console.log(res.data);
            dispatch(postNewUserAsync('success'));
        }).catch(function (error) {
            console.log('error postNewUser : ');
            console.log(error);
            dispatch(postNewUserAsync('fail'));
//             error postNewUser : 
// postUser.js:14 Error: Given action "POST_NEW_USER", reducer "users" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.
//     at combination (combineReducers.js:123)
//     at dispatch (createStore.js:165)
//     at redux-logger.js:1
//     at index.js:14
//     at dispatch (applyMiddleware.js:35)
//     at postUser.js:11
//     at <anonymous>
        });
    }
}

function postNewUserAsync (payload) {
    return {
        type: 'POST_NEW_USER',
        payload: payload
    }
}
