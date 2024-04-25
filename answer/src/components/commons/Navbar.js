import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../modules/loginActions';
import { useState } from 'react';
import '../../css/navbar.css';

function Navbar() {

    const [username1, setUsername] = useState('');

    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const username = useSelector(state => state.login.username);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        dispatch(login()); // 로그인 액션 디스패치
        event.preventDefault();
    };

    const handleLogout = () => {
        // 로그아웃 처리 후 리덕스에 액션을 디스패치하여 상태 변경
        dispatch(logout());
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value); // 사용자 이름 상태 업데이트
    };



    return (
        <div className="navbar">
            <ul className="navbar-links">
                <li><NavLink className="navbar-link" exact to="/" activeClassName="active">Home</NavLink></li>
                {isLoggedIn && (
                    <>
                        <li><NavLink className="navbar-link-logout" onClick={handleLogout}>로그아웃</NavLink></li>
                        <li><NavLink className="navbar-link" exact to="/menu">메뉴</NavLink></li>
                    </>
                )}
                {!isLoggedIn && (
                    <li><NavLink className="navbar-link" to="/login">로그인</NavLink></li>
                )}
                
            </ul>
        </div>
    );
}

export default Navbar;