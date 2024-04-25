import { useEffect, useState } from "react";
import { callGetMenuListAPI } from "../../apis/MenuAPI";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../items/MenuItem";

function MenuList() {
   
    const result = useSelector(state => state.menuReducer);
    const menuList = result.menuList;
    const dispatch = useDispatch();


    useEffect(
        () => {dispatch(callGetMenuListAPI())}, []
    );


    return (
        menuList && (
        <div className="menuBox">
            {menuList.map(menu => <MenuItem key={menu.id} menu={menu} />)}
        </div>
        )
    );
}
export default MenuList;