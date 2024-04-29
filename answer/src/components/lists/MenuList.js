import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../items/MenuItem";
import { useEffect } from "react";
import { getMenuAPI } from "../../apis/MenuAPICalls";
import boxStyle from "./MenuList.module.css";

function MenuList() {
    const menus = useSelector(state => state.menuReducer);
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getMenuAPI());
        }, []
    );

    return (
        menus && menus.length > 0 && (
            <div className={boxStyle.MenuBox}>
                {menus.map(menu => <MenuItem key={menu.id} menu={menu} />)}
            </div>
        )
    );
}

export default MenuList;
