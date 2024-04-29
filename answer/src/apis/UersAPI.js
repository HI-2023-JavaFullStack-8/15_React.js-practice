import { request } from "./API";
import { getUser } from "../modules/LoginModules";

/*
    로그인에 대한 api 요청 함수 작성
    (Api.js의 request 함수 활용)
*/

export function getUserAPI(loginInfo) {
    
    console.log('[getUser] 도착!!');

    return async (dispatch) => {

        const result = await request('GET', '/user');
    
        console.log('[getUserAPI의 result] : ', result);

        const checkUser = await result.find(user => user.id === loginInfo.id && user.password === loginInfo.password);

        console.log('[getUerAPI의 checkUser] : ', checkUser);

        dispatch(getUser(checkUser));
    }
};