import { useState } from "react";
import { Box, TextField, Button, Grid, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { registerMenuAPI } from "../apis/MenuAPICalls";
import { useNavigate } from "react-router-dom";

export default function MenuRegist() {

    const navigate = useNavigate();

    const [newMenuData, setNewMenuData] = useState({
        menuName: "",
        menuPrice: "",
        categoryName: "",
        isOrderable: true,
        detail: {
            description: "",
            image: ""
        }
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        if (name === "description" || name === "image") {
            setNewMenuData((prevData) => ({
                ...prevData,
                detail: {
                    ...prevData.detail,
                    [name]: value
                }
            }));
        } else if (name === "isOrderable") {
            setNewMenuData({
                ...newMenuData,
                [name]: value === "true" ? true : false
            });
        } else {
            setNewMenuData({
                ...newMenuData,
                [name]: value
            });
        }
    };

    const onClickHandler = async () => {
        try {
            const registeredMenu = await registerMenuAPI(newMenuData);
            alert("메뉴가 성공적으로 등록되었습니다." + registeredMenu.id);
            navigate(`/menus/detail/${registeredMenu.id}`);
        } catch (error) {
            console.error("메뉴 등록에 실패하였습니다.");
        }
    };

    return (
        <>
            <h1>Register new menu</h1>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                        <TextField
                            label="Menu"
                            variant="outlined"
                            name="menuName"
                            value={newMenuData.menuName}
                            onChange={onChangeHandler}
                            fullWidth
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                        <TextField
                            label="Price"
                            variant="outlined"
                            name="menuPrice"
                            type="number"
                            value={newMenuData.menuPrice}
                            onChange={onChangeHandler}
                            fullWidth
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                        <TextField
                            label="Menu Category"
                            variant="outlined"
                            name="categoryName"
                            value={newMenuData.categoryName}
                            onChange={onChangeHandler}
                            fullWidth
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                        <TextField
                            label="Description"
                            variant="outlined"
                            name="description"
                            value={newMenuData.detail.description}
                            onChange={onChangeHandler}
                            fullWidth
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                        <Box mr={1}>
                            <Box mb={1}><b>Available</b></Box>
                            <RadioGroup
                                name="isOrderable"
                                value={newMenuData.isOrderable}
                                onChange={onChangeHandler}
                            >
                                <FormControlLabel value={true} control={<Radio/> } label="Yes" />
                                <FormControlLabel value={false} control={<Radio />} label="No" />
                            </RadioGroup>
                        </Box>
                    </Box>
                </Grid>
                <Button variant="contained" onClick={onClickHandler}>
                    Register
                </Button>
            </Grid>
        </>
    );
}