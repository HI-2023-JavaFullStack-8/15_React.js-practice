import Menu from "../components/items/Menu";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuAPI } from "../apis/MenuAPICalls";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function MenuDetail() {

    const { menuId } = useParams();
    console.log('menuId: ', menuId);
    const dispatch = useDispatch();
    
    const menu = useSelector(state => state.menuReducer.find(menu => menu.id === menuId));
    console.log('menu가 죽어도 안나온다', menu);
    const user = useSelector(state => state.userReducer);
    const isLoggedIn = user.id !== '';

    useEffect(() => {
        dispatch(getMenuAPI(menuId));
    }, [dispatch, menuId]);

    useEffect(() => {
        if (menu) {
            console.log("Menu fetched:", menu);
        } else {
            console.log("Menu not yet fetched");
        }
    }, [menu]);
    
    return (
        <>
            <Button component={Link} to=''>Back to menu list</Button>
            <h1>All about the menus we have to offer!
                {isLoggedIn && (
                    <span>
                        <Button component={Link} to={`/menus/modify/${menuId}`}>
                            Update menu info
                        </Button>
                    </span>
                )}
            </h1>
            <Menu menu={menu} />
        </>
    );
}

export default MenuDetail;