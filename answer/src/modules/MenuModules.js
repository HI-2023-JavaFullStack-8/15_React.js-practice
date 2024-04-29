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
            console.log('[menulist reducer] payload: ', payload);

            return payload
        },
        [GET_MENU]: (state, { payload }) => {
            console.log('[menu reducer] payload: ', payload);

            return payload
        }
    }, initialState
);


export default menuReducer;

