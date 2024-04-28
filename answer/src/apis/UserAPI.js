import { login } from "../modules/UserModule";
import { request } from "./API";

function callLoginAPI(loginInfo) {

    return async (dispatch, getState) => {
        const userList = await request('GET', '/user');
        const result = await userList.find(user => user.id === loginInfo.id && user.password === loginInfo.password);
        dispatch(login(result));
    }

}

export default callLoginAPI;