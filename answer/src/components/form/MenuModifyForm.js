import { useState } from "react";
import { updateMenuAPI } from "../../apis/MenuAPICalls";
import { Box, TextField, Button, Grid, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export default function MenuModifyForm({ menu }) {
    const { id, menuName, menuPrice, categoryName, isOrderable, detail } = menu || {};
    const { description, image } = detail || {};

    const [newMenuData, setNewMenuData] = useState({
        menuName: menuName || "",
        menuPrice: menuPrice || "",
        categoryName: categoryName || "",
        isOrderable: isOrderable ? "Yes" : "No",
        detail: {
            description: description || "",
            image: image || ""
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
        } else {
            setNewMenuData({
                ...newMenuData,
                [name]: value
            });
        }
    };

    const onUpdateHandler = async (fieldName) => {
        try {
            const updatedData = { ...newMenuData, [fieldName]: newMenuData[fieldName] };
            await updateMenuAPI(id, updatedData);
            alert("메뉴 정보가 성공적으로 업데이트 되었습니다.");
        } catch (error) {
            alert("메뉴 정보 업데이트에 실패했습니다.");
        }
    };

    return (
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
                    <Button variant="contained" onClick={() => onUpdateHandler("menuName")}>
                        Update
                    </Button>
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
                    <Button variant="contained" onClick={() => onUpdateHandler("menuPrice")}>
                        Update
                    </Button>
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
                    <Button variant="contained" onClick={() => onUpdateHandler("categoryName")}>
                        Update
                    </Button>
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
                    <Button variant="contained" onClick={() => onUpdateHandler("description")}>
                        Update
                    </Button>
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
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="" control={<Radio />} label="No" />
                        </RadioGroup>
                    </Box>
                    <Button variant="contained" onClick={() => onUpdateHandler("isOrderable")}>
                        Update
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
}
