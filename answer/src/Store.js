import { applyMiddleware } from "redux";
import rootReducer from "./modules";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;