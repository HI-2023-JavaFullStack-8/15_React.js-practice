import { createActions, handleActions } from "redux-actions";

/* 초기 state 값 */
const initialState = {
    id: '',
    password: '',
    nickname: ''
};

/* action */

/* type */
const GET_USER = 'user/GET_USER';
const REMOVE_LOGIN_USER = 'user/REMOVE_LOGIN_USER';

/* action function */
export const { user: { getUser, removeLoginUser } } = createActions({
    [GET_USER]: (res) => ({ user: res }),
    [REMOVE_LOGIN_USER]: (res = initialState) => ({ res })
});

/* reducer */
const userReducer = handleActions(
    {
        [GET_USER]: (state, { payload }) => {

            if (payload.res) {
                console.log('[getUser reducer] payload-login ', payload);
                console.log('[getUser reducer] res-login ', payload.res);

                localStorage.setItem("isLogin", true);
                
            } else {
                console.log('[getUser reducer] payload-logout ', payload);
                console.log('[getUser reducer] res-logout ', payload.res);
            }

            return payload.res;
        },
        [REMOVE_LOGIN_USER]: (state, { payload }) => {

            return payload.res;
        }
    }, initialState
);

export default userReducer;