
import { request } from "./Api"
import { getMenulist, getMenu, registMenu, modifyMenu, deleteMenu } from "../modules/MenuModule";


export function callGetMenuListAPI() {

    console.log('getMenuList api calls...');

    return async (dispatch, getState) => {

        const result = await request('GET', '/menu');
        console.log('getMenuList result : ', result);

        dispatch(getMenulist(result));
    }
}

export function callGetMenuAPI(id) {

    console.log('getMenu api calls...');

    return async (dispatch, getState) => {

        const result = await request('GET', `/menu/${id}`);
        console.log('getMenu result : ', result);

        dispatch(getMenu(result));
    }
}

export function callRegistMenuAPI(menu) {

    console.log('registMenu api calls...');

    return async (dispatch, getState) => {

        const list = await request('GET', '/menu');
        const newId = parseInt(list[parseInt(list.length) - 1].id) + 1;
        menu.id = newId.toString();
        menu.detail.image = "/images/test.png";

        const result = await request('POST', '/menu/', menu);
        console.log('registMenu result : ', result);

        dispatch(registMenu(result));
    }
}

export function callModifyMenuAPI(menu) {

    console.log('modifyMenu api calls...');

    return async (dispatch, getState) => {

        const result = await request('PUT', `/menu/${menu.id}`, menu);
        console.log('modifyMenu result : ', result);

        dispatch(modifyMenu(result));
    }
}

export function callDeleteMenuAPI(id) {

    console.log('deleteMenu api calls...');

    return async (dispatch, getState) => {

        const result = await request('DELETE', `/menu/${id}`);
        console.log('deleteMenu result : ', result);

        dispatch(deleteMenu(result));
    }

}