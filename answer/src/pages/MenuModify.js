import { useDispatch, useSelector } from "react-redux";
import MenuModifyForm from "../components/form/MenuModifyForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getMenuAPI } from "../apis/MenuAPICalls";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function MenuModify() {
   
    const { menuId } = useParams();
    const dispatch = useDispatch();
    const goBack = () => {window.history.back();
    };

    useEffect(() => {
        dispatch(getMenuAPI(menuId));
    }, [dispatch, menuId]);

    const menu = useSelector(state => state.menuReducer.find(menu => menu.id === menuId));

    return (
        <>
            <Button sx={{ marginTop: 3}} onClick={goBack} >Go back</Button>
            <h1>Please fill out the input boxes below. </h1>
            <MenuModifyForm menu={menu}/>
            <Button sx={{ marginTop: 5, display: 'block', margin: '0 auto' }} onClick={goBack}>All done! Go back</Button>
        </>
    );
}
