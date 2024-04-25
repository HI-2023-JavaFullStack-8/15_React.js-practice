import { useDispatch } from 'react-redux';
import { login, logout } from '../../modules/loginActions';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = useSelector(state => state.login.isLoggedIn); // Redux 상태에서 isLoggedIn 가져오기
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        dispatch(login(username)); // 로그인 액션 디스패치
        event.preventDefault();
    };

    const handleLogout = () => {
        dispatch(logout()); // 로그아웃 액션 디스패치
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value); // 사용자 이름 상태 업데이트
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value); // 비밀번호 상태 업데이트
    };

    
    return (
        <div>
            {/* 로그인 상태에 따라 다른 버튼을 렌더링 */}
            {isLoggedIn ? (
                <>
                    <button onClick={handleLogout}>로그아웃</button>
                </>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input type="text" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <button type="submit">로그인</button>
                </form>
            )}
        </div>
    );
}

export default LoginForm;