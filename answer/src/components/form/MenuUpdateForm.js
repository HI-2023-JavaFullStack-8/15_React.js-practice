import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callUpdateMenuAPI } from '../../apis/MenuAPI';

function MenuUpdateForm() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.menuReducer);

    const [updateMenu, setUpdateMenu] = useState(
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
                    image: updateMenu.detail.image
                };
                break;
        }

        setUpdateMenu(
            {
                ...updateMenu,
                id: id,
                [name]: value
            }
        );
    }

    useEffect(
        () => {
            if (result.update) {
                alert('메뉴 수정');
                navigate(`/menu`);
            }
        },
        [result]
    );

    const onClickHandler = () => {
    
        dispatch(callUpdateMenuAPI(updateMenu));
    }

    return (
        <>
            <h1>{id}번 메뉴 수정</h1>
            <label>메뉴 이름 : </label>
            <input type="text" name="menuName" value={updateMenu.menuName} onChange={onChangeHandler} />
            <br />
            <label>메뉴 가격 : </label>
            <input type="number" name="menuPrice" value={updateMenu.menuPrice} onChange={onChangeHandler} />
            <br />
            <label>카테고리 : </label>
            <select name="categoryName" value={updateMenu.categoryName} onChange={onChangeHandler}>
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
            <select name="isOrderable" value={updateMenu.isOrderable} onChange={onChangeHandler}>
                <option value="true">판매 가능</option>
                <option value="false">판매 불가</option>
            </select>
            <br />
            <label>설명 : </label>
            <textarea name="description" value={updateMenu.detail.description} onChange={onChangeHandler}></textarea>
            <br />
            <button onClick={onClickHandler}>메뉴 수정</button>
        </>
    )
}

export default MenuUpdateForm;