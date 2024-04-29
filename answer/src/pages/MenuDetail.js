import Menu from "../components/items/Menu";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuAPI } from "../apis/MenuAPICalls";
import { Link } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";

function MenuDetail() {

    const { menuId } = useParams();
    const dispatch = useDispatch();
    const [openDialog, setOpenDialog] = useState(false);

    const menu = useSelector(state => state.menuReducer.find(menu => menu.id === menuId));
    const user = useSelector(state => state.userReducer);
    const isLoggedIn = user.id !== '';

    useEffect(() => {
        dispatch(getMenuAPI(menuId));
    }, [dispatch, menuId]);

    const onDeleteHandler = () => {

    };

    return (
        <>
            <Button component={Link} to={'/menus'}>Back to menu list</Button>
            <h1 style={{ marginBottom: '20px' }}>All about the menus we have to offer!</h1>
            {isLoggedIn && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                    <Button variant="contained" component={Link} to={`/menus/modify/${menuId}`} style={{ marginRight: '10px' }}>
                        Update menu info
                    </Button>
                    <Button color="error" variant="contained" onClick={() => setOpenDialog(true)}>
                        Delete menu
                    </Button>
                </div>
            )}
            <Menu menu={menu} />

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Delete Menu</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this menu?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                    <Button onClick={onDeleteHandler} autoFocus sx={{ color: 'red' }}>Delete</Button>
                </DialogActions>
            </Dialog>
        </>
    );

}

export default MenuDetail;