import { request } from './Api';
import { GET_MENUS } from '../modules/MenuModule';

export const getMenuAPI = () => {

    return async (dispatch) => {
        try {
            const menus = await request('http://localhost:4000/menu', 'get');
            dispatch({
                type: GET_MENUS,
                payload: menus
            });
        } catch (error) {
            console.log('[MenuAPICalls] error:', error);
        }
    };
};

export const updateMenuAPI = async (menuId, updatedData) => {
    try {
        await request(`http://localhost:4000/menu/${menuId}`, 'put', updatedData);
    } catch (error) {
        throw new Error("[MenuAPICalls 중 updateMenuAPI] error:");
    }
};

export const registerMenuAPI = async (newMenuData) => {
    try {
        const response = await request('http://localhost:4000/menu', 'post', newMenuData);
        return response;
    } catch (error) {
        throw new Error("[MenuAPICalls 중 registerMenuAPI error: ]", error)
    }
};

export const deleteMenuAPI = async (menu) => {
    try {
        await request(`http://localhost:4000/menu/${menu.id}`, 'delete', menu)
    } catch (error) {
        throw new Error("[MenuAPICalls 중 deleteMenuAPI error]", error);
    }
};