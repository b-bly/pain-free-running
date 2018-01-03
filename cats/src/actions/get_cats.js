import axios from 'axios';
const url = 'http://localhost:5000/api';

export default function getCats(cat) {
    return dispatch => {
        axios.get(`${url}/cats`)
            .then(res => {
                console.log('get cats: ');
                console.log(res.data);
                dispatch(getCatsAsync(res.data))
            }).catch(function (error) {
                console.log('error getting cats');

                console.log(error);
            });
    }
}

function getCatsAsync(cats) {
    return {
        type: 'GET_CATS',
        payload: cats
    };
}