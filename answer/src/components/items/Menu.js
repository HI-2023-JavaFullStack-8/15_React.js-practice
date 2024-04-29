import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetMenuAPI } from "../../apis/MenuApiCalls";
import '../../css/menu.css';

function Menu({ id }) {

    const result = useSelector(state => state.menuReducer);
    const menu = result.menu;
    const dispatch = useDispatch();

    useEffect(
        () => {
            /* menu 호출 API */
            dispatch(callGetMenuAPI(id));
        },
        [dispatch, id]
    );

    return (
        menu && (
            <div className="menu-card">
                <div className="menu-card-header">
                    <h3 className="menu-title">{menu.menuName}</h3>
                </div>
                <div className="menu-card-body">
                    <div className="menu-info">
                        <span className="info-label">메뉴 가격:</span> {menu.menuPrice}원
                    </div>
                    <div className="menu-info">
                        <span className="info-label">메뉴 종류:</span> {menu.categoryName}
                    </div>
                    <div className="menu-info">
                        <span className="info-label">메뉴 상세:</span> {menu.detail.description}
                    </div>
                </div>
                <div className="menu-card-footer">
                    <img className="menu-image" src={menu.detail.image} alt={menu.menuName} />
                </div>
            </div>
        )
    );
}

export default Menu;