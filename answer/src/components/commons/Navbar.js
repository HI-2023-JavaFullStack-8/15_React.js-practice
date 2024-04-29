import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeLoginUser } from '../../modules/LoginModules';

function Navbar() {

    const isLoginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        localStorage.removeItem('isLogin');
        dispatch(removeLoginUser);
        navigate("/");
    };

    return (
        <div style={{ marginLeft: '30px', display: 'flex' }}>
                <NavLink to="/"><button>MAIN</button></NavLink>
                <NavLink to="/menu"><button>MENU</button></NavLink>
            {
                (!isLoginStatus) ?
                    (<NavLink to="/login"><button>LOGIN</button></NavLink>) :
                    (<a onClick={logoutHandler}><NavLink to="/">LOGOUT</NavLink></a>)
            }
        </div>
    );
}

export default Navbar;