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