import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../items/MenuItem";
import { callGetMenuListAPI } from "../../apis/MenuAPI";
import '../../style.css';


function MenuList() {

    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
    const dispatch = useDispatch();


    useEffect(
        () => {
            dispatch(callGetMenuListAPI());
        },
        [dispatch]
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