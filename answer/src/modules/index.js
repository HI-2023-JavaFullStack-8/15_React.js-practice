import ReactDOM from 'react-dom/client';

/* root reducer */ 

import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import menuReducer from './MenuModule';

const rootReducer = combineReducers({
    login: loginReducer,
    menuReducer
});

export default rootReducer;