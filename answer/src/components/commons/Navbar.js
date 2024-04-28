import { NavLink, useNavigate } from 'react-router-dom';
import '../../style.css';
import { useDispatch } from 'react-redux';
import { resetLoginUser } from '../../modules/UserModule';

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
            <NavLink to="/"><button>메인</button></NavLink>
            <NavLink to="/menu"><button>메뉴</button></NavLink>
            { !loginStatus ? (
                    <NavLink to="/login"><button>로그인</button></NavLink>
                ) : (
                    <NavLink><button onClick={onClickLogout}>로그아웃</button></NavLink>
                )
            }
        </div>
    );
}
export default Navbar;