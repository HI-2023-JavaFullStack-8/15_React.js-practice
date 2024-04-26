
/* root reducer */ 

import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import menuReducer from './MenuModule';

const rootReducer = combineReducers({
    loginReducer,
    menuReducer
});

export default rootReducer;