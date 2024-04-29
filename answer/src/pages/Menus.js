import MenuList from "../components/lists/MenuList";
import { Button } from "@mui/material";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

function Menus() {

    const user = useSelector(state => state.userReducer);
    const isLoggedIn = user.id !== '';

    return(
        <div>
            <h1>3Fs: Finger-licking👌🏼😋, Freaking Fantastic😘 menus</h1>
            {isLoggedIn &&(
                <Button sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }} component={Link} to={'/menuRegist'}>Regist new menu</Button>
            )}
            <MenuList />
        </div>
    );
}

export default Menus;