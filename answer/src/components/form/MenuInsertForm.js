import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callInsertMenuAPI } from "../../apis/MenuAPI";

function MenuInsertForm() {

    const result = useSelector(state => state.menuReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [insertMenu, setInsertMenu] = useState(
        {
            id: 0,
            menuName: '',
            menuPrice: 0,
            categoryName: '한식',
            isOrderable: false,
            detail: {
                description: '',
                image: ''
            }
        }
    );

    const onChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        switch (name) {
            case 'menuPrice':
                value = parseInt(value);
                break;
            case 'isOrderable':
                value = !!value;
                break;
            case 'description':
                name = 'detail';
                value = {
                    description: value,
                    image: insertMenu.detail.image
                };
                break;
        }

        setInsertMenu(
            {
                ...insertMenu,
                [name]: value
            }
        );
    }

    useEffect(
        () => {
            if(result.insert) {
                alert("메뉴 등록 성공");
                navigate(`/menu`);
            }
        }, [result]
    );

    const onClickHandler = () => {
        dispatch(callInsertMenuAPI(insertMenu));
    }


    return( 
        <>
            <label>메뉴 이름 : </label>
            <input type="text" name="menuName" value={insertMenu.menuName} onChange={onChangeHandler} />
            <br />
            <label>메뉴 가격 : </label>
            <input type="number" name="menuPrice" value={insertMenu.menuPrice} onChange={onChangeHandler} />
            <br />
            <label>카테고리 : </label>
            <select name="categoryName" value={insertMenu.categoryName} onChange={onChangeHandler}>
                <option>한식</option>
                <option>일식</option>
                <option>서양</option>
                <option>동양</option>
                <option>커피</option>
                <option>쥬스</option>
                <option>기타</option>
            </select>
            <br />
            <label>판매 여부 : </label>
            <select name="isOrderable" value={insertMenu.isOrderable} onChange={onChangeHandler}>
                <option value="true">판매 가능</option>
                <option value="false">판매 불가</option>
            </select>
            <br />
            <label>설명 : </label>
            <textarea name="description" value={insertMenu.detail.description} onChange={onChangeHandler}></textarea>
            <br />
            <button onClick={onClickHandler}>메뉴 등록</button>
        </>
    );

}
export default MenuInsertForm;