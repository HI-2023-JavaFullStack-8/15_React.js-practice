/*
    메뉴 수정 페이지 작성
    (로그인하지 않은 상태에서 호출할 경우 메인으로 이동)
*/

import { useDispatch, useSelector } from "react-redux";
import MenuModifyForm from "../components/form/MenuModifyForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getMenuAPI } from "../apis/MenuAPICalls";
import { Link } from "react-router-dom";

export default function MenuModify() {
   
    const { menuId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMenuAPI(menuId));
    }, [dispatch, menuId]);

    const menu = useSelector(state => state.menuReducer.find(menu => menu.id === menuId));

    return (
        <>
            <Link to={'/menus'}>Go back</Link>
            <h1>Please fill out the input boxes below. </h1>
            <MenuModifyForm menu={menu}/>
        </>
    );
}
