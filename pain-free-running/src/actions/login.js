import axios from 'axios';
const url = 'http://localhost:5000/login';

export default function login(userInfo) {
    return dispatch => {
        console.log('login action user: ');
        console.log(userInfo);
        axios.post(url, userInfo).then(res => {
            console.log('login action res.data');
            console.log(res.data);
            dispatch(loginAsync('success'));
        }).catch(function (error) {
            console.log('error login : ');
            console.log(error);
            dispatch(loginAsync('fail'));
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

function loginAsync (payload) {
    return {
        type: 'LOGIN',
        payload: payload
    }
}
