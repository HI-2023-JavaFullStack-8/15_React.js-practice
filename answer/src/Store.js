import { legacy_createStore as createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './modules';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;