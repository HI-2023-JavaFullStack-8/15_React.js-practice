import { createActions, handleActions } from "redux-actions";

const initialState = {
    id: '',
    password: ''
};

export const LOGIN = 'user/LOGIN';
export const RESET_LOGIN_USER = 'user/RESET_LOGIN_USER';

export const { user: { login, resetLoginUser } } = createActions({
    [LOGIN]: (res) => ({ res }),
    [RESET_LOGIN_USER]: (res = initialState) => ({ res })
});

const userReducer = handleActions(
    {
        [LOGIN]: (state, { payload: { res } }) => {
            if (res) {
                localStorage.setItem("isLogin", true);
            } else {
                res = { message: '로그인 실패' };
            }

            return res;

        },
        [RESET_LOGIN_USER]: (state, { payload: { res } }) => {
            return res
        }
    }, initialState
)
export default userReducer;
