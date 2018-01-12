import { combineReducers } from 'redux';
import injuryList from './injuryListReducer';
import injuryInfo from './injuryInfoReducer';


const rootReducer = combineReducers({
    injuryList,
   injuryInfo
});

export default rootReducer;