export default function (state=[], action) {
    if (action.type == 'GET_CATS') {
        console.log('cats reducer, action: ');
        console.log(action);
        
        return action.payload;
    } else {
        return state;
    }
}