import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callModifyMenuAPI } from '../../apis/MenuApiCalls';
import '../../css/menu-modify-form.css';

function MenuModifyForm() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.menuReducer);


    const [modifyMenu, setModifyMenu] = useState(
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
                    image: modifyMenu.detail.image
                };
                break;
        }

        setModifyMenu(
            {
                ...modifyMenu,
                id: id,
                [name]: value
            }
        );
    }

    useEffect(
        () => {

            if (result.modify) {
                alert('메뉴 수정');
                navigate(`/menu`);
            }
        },
        [result]
    );

    const onClickHandler = () => {

        dispatch(callModifyMenuAPI(modifyMenu));
    }

    return (
        <>
            <h1 className="menu-modify-form-title">{id}번 메뉴 수정</h1>
            <label className="menu-modify-form-label">메뉴 이름 : </label>
            <input className="menu-modify-form-input" type="text" name="menuName" value={modifyMenu.menuName} onChange={onChangeHandler} />
            <br />
            <label className="menu-modify-form-label">메뉴 가격 : </label>
            <input className="menu-modify-form-input" type="number" name="menuPrice" value={modifyMenu.menuPrice} onChange={onChangeHandler} />
            <br />
            <label className="menu-modify-form-label">카테고리 : </label>
            <select className="menu-modify-form-select" name="categoryName" value={modifyMenu.categoryName} onChange={onChangeHandler}>
                <option>한식</option>
                <option>일식</option>
                <option>서양</option>
                <option>동양</option>
                <option>커피</option>
                <option>쥬스</option>
                <option>기타</option>
            </select>
            <br />
            <label className="menu-modify-form-label">판매 여부 : </label>
            <select className="menu-modify-form-select" name="isOrderable" value={modifyMenu.isOrderable} onChange={onChangeHandler}>
                <option value="true">판매 가능</option>
                <option value="false">판매 불가</option>
            </select>
            <br />
            <label className="menu-modify-form-label">설명 : </label>
            <textarea className="menu-modify-form-textarea" name="description" value={modifyMenu.detail.description} onChange={onChangeHandler}></textarea>
            <br />

            <button className="menu-modify-button" onClick={onClickHandler}>메뉴 수정</button>
        </>

    )
}

export default MenuModifyForm;