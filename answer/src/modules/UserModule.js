/*
    User 관련 모듈
    (로그인 시 사용자 정보를 localstorage에 저장)
*/

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    password: '',
    nickname: ''
};

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            const { id, password, nickname } = action.payload;
            state.id = id;
            state.password = password;
            state.nickname = nickname;
        },
        logout(state) {
            state.id = '';
            state.password = '';
            state.nickname = '';
        },
    },
});

export const { loginSuccess, logout } = userReducer.actions;
export default userReducer.reducer;
