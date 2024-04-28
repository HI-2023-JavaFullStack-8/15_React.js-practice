import { useNavigate } from "react-router-dom";
import MenuList from "../components/lists/MenuList";

function Menus() {

    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();

    return (
        <div className="menu">
            <h1>메뉴목록</h1>
            { (loginStatus) && <button onClick={() => navigate(`/menu/insert_menu`)}>메뉴 등록</button> }
            <MenuList />
        </div>
    );
}
export default Menus;