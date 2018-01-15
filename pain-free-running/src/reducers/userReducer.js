export default function (state = [], action) {
    switch (action.type) {
        case 'POST_NEW_USER':
            console.log('USER reducer, action: ');
            console.log({...action.payload});
            return action.payload;           
            
        default:
            return state;           
    }
}