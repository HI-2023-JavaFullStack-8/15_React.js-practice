import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setMenuDetails } from '../../modules/MenuModule'; // 액션 import

function Menu() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const menuDetails = useSelector((state) => state.menuReducer.menuDetails);

  useEffect(() => {
    const fetchMenuDetailsData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/menu/${id}`);
        if (!response.ok) {
          throw new Error('메뉴를 가져오는데 실패했습니다.');
        }
        const data = await response.json();
        dispatch(setMenuDetails(data));
      } catch (error) {
        console.error('메뉴 정보를 가져오는 중 에러가 발생했습니다:', error);
      }
    };

    fetchMenuDetailsData();
  }, [dispatch, id]);

  return (
    <div>
      {menuDetails ? (
        <div>
          <h2>메뉴 상세 정보</h2>
          <h3>메뉴명: {menuDetails.menuName}</h3>
          <h3>판매가: {menuDetails.menuPrice}</h3>
          <h3>메뉴 종류: {menuDetails.categoryName}</h3>
          <h3>메뉴 설명: {menuDetails.detail.description}</h3>
          <img src={menuDetails.detail.image} alt={menuDetails.menuName} style={{ maxWidth: 500 }} />
          <div>
          <button>수정</button>
          <button>삭제</button>
          </div>
        </div>
       
      ) : (
        <div>메뉴를 찾을 수 없습니다.</div>
      )}
    </div>
  );
}

export default Menu;