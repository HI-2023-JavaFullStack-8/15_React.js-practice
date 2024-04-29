import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, resetLoginUser } from '../../modules/loginReducer';
import '../../css/navbar.css';

function Navbar() {

    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const logoutHandler = () => {
        localStorage.removeItem('isLogin');
        dispatch(resetLoginUser());
        navigate('/');
    }

    return (
        <div className="navbar">
            <ul className="navbar-links">
                <li><NavLink exact to='/' className="navbar-link">메인으로</NavLink></li>
                <li><NavLink to='/menu' className="navbar-link">메뉴보기</NavLink></li>
                
                { !loginStatus ? (
                    <li><NavLink to='/login' className="navbar-link">로그인</NavLink></li>
                ) : (
                    <li onClick={logoutHandler}><span className="navbar-link">로그아웃</span></li>
                )}
            </ul>
        </div>
    );
}

export default Navbar;