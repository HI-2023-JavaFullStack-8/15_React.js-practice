import { createActions, handleActions } from 'redux-actions'
/* 초기 state 값 */
const initialState = [
    {
        
      id: 0,
      menuName: '',
      menuPrice: 0,
      categoryName: '',
      isOrderable: true,
      detail: {
        description: '',
        image: ''
      }
    }
]

/* action */
/* type */
export const GET_MENUS = 'menus/GET_MENUS'

/* action function */
const actions = createActions({
    [GET_MENUS]: () => {}
});

/* reducer */
const menuReducer = handleActions(
    {
        [GET_MENUS]: (state, {payload}) => {
            return payload;
        }
    }, initialState
);

export default menuReducer;