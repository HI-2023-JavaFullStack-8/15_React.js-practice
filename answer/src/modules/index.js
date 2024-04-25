import { combineReducers } from 'redux';
import menuReducer from './MenuModules';

const rootReducer = combineReducers({
    menuReducer
});

export default rootReducer;