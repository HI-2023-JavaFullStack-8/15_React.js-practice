import { useState } from "react";
import { Link } from "react-router-dom";
import { updateMenuAPI } from "../../apis/MenuAPICalls";

export default function MenuModifyForm({ menu }) {

    const { id, menuName, menuPrice, categoryName, isOrderable, detail } = menu;
    const { description, image } = detail || {};
    
    const [newMenuData, setNewMenuData] = useState({
        menuName: menuName,
        menuPrice: menuPrice,
        categoryName: categoryName,
        isOrderable: isOrderable ? "Yes" : "No",
        detail: {
            description: description,
            image: image
        }
    });

    const onChangeHandler = e => {
        const { name, value } = e.target;
        if (name === "description" || name === "image") {
            setNewMenuData(prevData => ({
                ...prevData,
                detail: {
                    ...prevData.detail,
                    [name]: value
                }
            }));
        } else {
            setNewMenuData({
                ...newMenuData,
                [name]: value,
            });
        }
    };
    

    const onUpdateHandler = async (fieldName) => {
        try {
            const updatedData = { ...newMenuData, [fieldName]: newMenuData[fieldName] };
            await updateMenuAPI(id, updatedData);
            alert("메뉴 정보가 성공적으로 업데이트 되었습니다.");
        } catch(error) {
            alert("메뉴 정보 업데이트에 실패했습니다.");
        }
    };
    
    return (
        <>
            <Link to={`/menus/detail/${menu.id}`}>Back to Detail</Link>

            <>
                <div>
                    <h2>menu : <input type="text" name="menuName" value={newMenuData.menuName} onChange={onChangeHandler} />
                        <button onClick={() => onUpdateHandler("menuName")}>Update</button></h2>
                </div>

                <div>
                    <h2>price : KRW <input type="number" name="menuPrice" value={newMenuData.menuPrice} onChange={onChangeHandler} />
                        <button onClick={() => onUpdateHandler("menuPrice")}>Update</button></h2>
                </div>

                <div>
                    <h2>menu category: <input type="text" name="categoryName" value={newMenuData.categoryName} onChange={onChangeHandler} />
                        <button onClick={() => onUpdateHandler("categoryName")}>Update</button></h2>
                </div>

                <div>
                    <h2>description: <input type="text" name="description" value={newMenuData.detail.description} onChange={onChangeHandler} />
                        <button onClick={() => onUpdateHandler("description")}>Update</button></h2>
                </div>

                <div>
                    <h2>available: <input type="text" name="isOrderable" value={newMenuData.isOrderable} onChange={onChangeHandler} />
                        <button onClick={() => onUpdateHandler("isOrderable")}>Update</button></h2>
                </div>
            </>

        </>
    );
}
