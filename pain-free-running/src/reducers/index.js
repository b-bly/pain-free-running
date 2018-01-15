import { combineReducers } from 'redux';
import injuryList from './injuryListReducer';
import injuryInfo from './injuryInfoReducer';
import users from './userReducer';

const rootReducer = combineReducers({
    injuryList,
    injuryInfo,
    users
});

export default rootReducer;