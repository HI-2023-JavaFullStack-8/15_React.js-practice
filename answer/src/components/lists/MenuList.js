import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuListAPI } from '../../apis/MenuAPI';
import MenuCard from '../items/MenuCard';

function MenuList() {

    const result = useSelector(state => state.menuReducer);

    // const menuList = result.menulist;
    const dispatch = useDispatch();

    console.log('[MenuList에 들어온 state.MenuReducer의 result]', result);

    useEffect(
        () => {
            dispatch(getMenuListAPI());
            console.log('[MenuList.js 의 result]', result);
        }
        , []
    );


    return (
        result.menulist && (
            <div className='flex'>
                <div className="menubox">
                    {result.menulist.map(menu => <MenuCard key={menu.id} menu={menu} />)}
                </div>
            </div>
        )
    );
}

export default MenuList;