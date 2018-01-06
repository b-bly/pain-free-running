export default function (state = [], action) {
    switch (action.type) {          
            
        case 'GET_INJURY_INFO':
            console.log('injuries reducer, action: ');
            console.log(action);
            return action.payload;
        default:
            return state;           
    }
}