import { request } from './API';
import { getMenuList } from '../modules/MenuModule';

export function callGetMenuListAPI() {
    
    return async (dispatch, getState) => {

        const result = await request('GET', '/menu');
        dispatch(callGetMenuListAPI(result));

    };
}

/*
    Menu 정보에 대한 api 요청 함수 작성
    (Api.js의 request 함수 활용)
*/