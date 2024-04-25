import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Menu() {

    const result = useSelector(state => state.menuReducer);
    const menu = result.menu;
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getMenuAPI(id));
        }, []
    );

    return (
        menu && (
            <>
                <h5>{menu.menuName}</h5>
                <h5>{menu.menuPrice}</h5>
                <h5>구분 : {menu.categoryName}</h5>
                <h5>판매 여부 : {menu.isOrderable}</h5>
                <img src={menu.detail.image} style={{ maxWidth: 500 }} alt={menu.menuName} />
            </>
        )
    );
}

export default Menu;