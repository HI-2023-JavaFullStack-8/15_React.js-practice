import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetMenuListAPI } from "../../apis/MenuApiCalls"
import MenuItem from '../items/MenuItem';
import '../../App.css'; 


function MenuList() {

    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
    const dispatch = useDispatch();

    console.log(menuList);

    useEffect(
        () => {
            dispatch(callGetMenuListAPI());
        },
        []
    );

    return (
        menuList && (
            <div className="menuBox">
                {menuList.map(menu => <MenuItem key={ menu.id } menu={ menu }/>)}
            </div>
        )
    );
}

export default MenuList;