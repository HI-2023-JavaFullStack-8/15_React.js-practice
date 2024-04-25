import { createActions, handleActions } from 'redux-actions';

/* 초기 state 값 */
const initialState = {
    id: 0,
    menuName: '',
    menuPrice: 0,
    categoryName: '',
    isOrderable: false,
    detail: {
        description: '',
        image: ''
    }
};


/* action */

/* type */
const GET_MENULIST = 'menu/GET_MENULIST';
const GET_MENU = 'menu/GET_MENU';

/* action function */
export const { menu: { getMenulist, getMenu } } = createActions({
    [GET_MENULIST]: (res) => ({ menulist: res }),
    [GET_MENU]: (res) => ({ menu: res })
});

/* reducer */
const menuReducer = handleActions(
    {
        [GET_MENULIST]: (state, { payload }) => {
            console.log('[reducer] payload: ', payload);

            return payload
        },
        [GET_MENU]: (state, { payload }) => {
            console.log('[reducer] payload: ', payload);

            return {
                ...state,
                menu: payload.menu
            };
        }
    }, initialState
);


export default menuReducer;

