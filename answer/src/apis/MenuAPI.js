import { request } from '../apis/API';
import { getMenulist, getMenu } from '../modules/MenuModules';

/*
    Menu 정보에 대한 api 요청 함수 작성
    (Api.js의 request 함수 활용)
*/

export function getMenuListAPI() {

    console.log('[getMenuListAPI] 도착!!');

    return async (dispatch) => {

        const result = await request('GET', '/menu');

        console.log('[getMenuListAPI의 result] : ', result);

        dispatch(getMenulist(result));

    }
};

export function getMenuAPI(id) {
    console.log('[getMenuAPI] 도착!!!');
    
    return async (dispatch) => {
        const result = await request('GET', `/menu/${id}`);

        console.log('[getMenuAPI의 result] : ', result);

        dispatch(getMenu(result));
    }
}

