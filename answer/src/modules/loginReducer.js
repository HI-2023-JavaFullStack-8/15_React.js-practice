import { LOGIN, LOGOUT } from './loginActions';

const initialState = {
    
    isLoggedIn: false,
    username: ''
    
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                username: action.payload,
                isLoggedIn: true,
                
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                username: '',
            };
        default:
            return state;
    }
    
};

export default loginReducer;