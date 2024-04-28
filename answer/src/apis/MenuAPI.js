import { request } from './API';
import { getMenulist, getMenu, insertMenu, updateMenu, deleteMenu } from "../modules/MenuModule";

export function callGetMenuListAPI() {

    return async (dispatch, getState) => {
        const result = await request('GET', '/menu');
        dispatch(getMenulist(result));
    };
}

export function callGetMenuAPI(id) {

    return async (dispatch, getState) => {
        const result = await request(`GET`, `/menu/${id}`);
        dispatch(getMenu(result));
    }
}

export function callInsertMenuAPI(menu) {

    return async (dispatch, getState) => {
        const list = await request('GET', '/menu');
        const newId = parseInt(list[parseInt(list.length) - 1].id) + 1;
        menu.id = newId.toString();
        menu.detail.image = "/images/test.png";

        const result = await request('POST', '/menu/', menu);
        dispatch(insertMenu(result));
    }
}

export function callUpdateMenuAPI(menu) {

    return async (dispatch, getState) => {
        const result = await request('PUT', `/menu/${menu.id}`, menu);
        dispatch(updateMenu(result));
    }
}

export function callDeleteMenuAPI(id) {

    return async (dispatch, getState) => {
        const result = await request('DELETE', `/menu/${id}`);
        dispatch(deleteMenu(result));
    }
}
