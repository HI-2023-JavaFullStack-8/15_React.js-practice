import { createActions, handleActions } from 'redux-actions';

const initialState = [];

/* action */
/* type */
export const GET_MENUS = 'menus/GET_MENUS';
export const GET_MENU_BY_ID = 'menus/GET_MENU_BY_ID';

/* action function */
const actions = createActions({
    [GET_MENUS]: () => { }
});

/* reducer */
const menuReducer = handleActions(
    {
        [GET_MENUS]: (state, { payload }) => {            
            return [...payload]; // [... ] 으로 감싸지 않으면 조회해온 메뉴 목록을 배열로 담아주지 못하게 되므로 오류 발생함.
        }
    }, initialState
);

export default menuReducer;