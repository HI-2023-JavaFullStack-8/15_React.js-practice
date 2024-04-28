import Menu from "../components/items/Menu";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { callDeleteMenuAPI } from "../apis/MenuAPI";
import { useEffect } from "react";

function MenuDetails() {
    
    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const result = useSelector(state => state.menuReducer);

    const updateHandler = () => navigate(`/menu/update/${ id }`);
    const deleteHandler = () => dispatch(callDeleteMenuAPI(id));

    useEffect(
        () => {
            if(result.delete) {
                alert("메뉴 삭제 성공");
                navigate(`/menu`);
            }
        }, [result]
    );

    return (
        <div>
        <h1>메뉴 상세</h1>
        <h1>
            { (loginStatus) && 
                <>
                    <button onClick={ updateHandler }>메뉴 수정</button>
                    <button onClick={ deleteHandler }>메뉴 삭제</button>
                </>
            }
        </h1>
        <Menu id={ id }/>
    </div>
    );
}   

export default MenuDetails;