export default function (state = [], action) {
    switch (action.type) {
        case 'GET_INJURIES_LIST':
            console.log('injuries reducer, action: ');
            console.log({...action.payload});
            return action.payload;           
            
        case 'GET_INJURY_INFO':
            console.log('injuries reducer, action: ');
            console.log(action);
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;           
    }
}