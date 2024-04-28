import {createActions, handleActions} from 'redux-actions';
/*  초기 state 값 */
const initialState = 

{
  menus: []
};
/* action */


/*type */ 
export const GET_MENUS = 'menus/GET_MENUS';
export const GET_MENU_DETAILS = 'menus/GET_MENU_DETAILS';
export const SET_MENU_DETAILS = 'menus/SET_MENU_DETAILS';
export const SET_ERROR = 'menus/SET_ERROR';



/*action function */

const actions = createActions({
    [GET_MENUS]: () => {}
});

export const getMenuDetails = (id) => ({
  type: GET_MENU_DETAILS,
  payload: id,
});

export const setMenuDetails = (details) => ({
  type: SET_MENU_DETAILS,
  payload: details,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});


/* reducer */
const menuReducer = handleActions(
  {
    [GET_MENUS]: (state, { payload }) => ({
      ...state,
      menus: payload,
    }),

    [SET_MENU_DETAILS]: (state, { payload }) => ({
      ...state,
      menuDetails: payload,
    }),

    [SET_ERROR]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
  initialState
);

export default menuReducer;


