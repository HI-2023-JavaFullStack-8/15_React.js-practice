
import { GET_MENUS } from '../modules/MenuModule';
/*
    Menu 정보에 대한 api 요청 함수 작성
    (Api.js의 request 함수 활용)
*/

export function callGetMenusAPI(){

    const requestURL =  'http://localhost:4000/menu';

    return async function getMenus(dispatch){
        const result = await fetch(requestURL).then(res => res.json());

        console.log('result : ', result);

        dispatch({type:GET_MENUS, payload: result});
        
    }
}




