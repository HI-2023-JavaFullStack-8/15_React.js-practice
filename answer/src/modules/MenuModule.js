import { createActions, handleActions } from 'redux-actions'

/* 초기 state 값 */
const initialState = {
    id: '',
    menuName: '',
    menuPrice: 0,
    categoryName: '',
    isOrderable: false,
    detail: {
        description: '',
        image: ''
    }

}

/* action */
/* type */
const GET_MENULIST = 'menu/GET_MENUlIST';
const GET_MENU = 'menu/GET_MENU';
const INSERT_MENU = 'menu/INSERT_MENU';
const UPDATE_MENU = 'menu/UPDATE_MENU';
const DELETE_MENU = 'menu/DELETE_MENU';

export const { menu: { getMenulist, getMenu, insertMenu, updateMenu, deleteMenu } } = createActions({
    [GET_MENULIST]: (res) => ({ menulist: res }),
    [GET_MENU]: (res) => ({ menu: res }),
    [INSERT_MENU]: (res) => ({ insert: res }),
    [UPDATE_MENU]: (res) => ({ update: res }),
    [DELETE_MENU]: (res) => ({ delete: res }),
});

/* reducer */
const menuReducer = handleActions(
    {
        [GET_MENULIST]: (state, { payload }) => {
            return payload;
        },
        [GET_MENU]: (state, { payload }) => {
            return payload;
        },
        [INSERT_MENU]: (state, { payload }) => {
            return payload;
        },
        [UPDATE_MENU]: (state, { payload }) => {
            return payload;
        },
        [DELETE_MENU]: (state, { payload }) => {
            return payload;
        }
    }, initialState
);

export default menuReducer;