import { combineReducers } from 'redux';
import menuReducer from './MenuModules';
import userReducer from './LoginModules';

const rootReducer = combineReducers({
    menuReducer,
    userReducer
});

export default rootReducer;