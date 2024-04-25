import { NavLink, useNavigate } from 'react-router-dom';
import '../../style.css';
import { useDispatch } from 'react-redux';

function Navbar() {

    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClickLogout = () => {
        localStorage.removeItem('isLogin');
        dispatch(resetLoginUser());
        navigate('/');
    }

    return (
        <div className='navbar'>
            <NavLink to="/main"><button>메인</button></NavLink>
            <NavLink to="/menus"><button>메뉴</button></NavLink>
            { !loginStatus ? (
                    <NavLink to="/login"><button>로그인</button></NavLink>
                ) : (
                    <NavLink to="/logout"><button onClick={onClickLogout}>로그아웃</button></NavLink>
                )
            }
        </div>
    );
}
export default Navbar;

/*
    Navbar 컴포넌트 작성

    1. 상단 메뉴바 만들기
    2. 로그인 조건에 따라 로그인/로그아웃 현출
    3. localStorage 활용해 로그아웃 시 로그인 정보 삭제
*/