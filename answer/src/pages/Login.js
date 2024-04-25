// Login.js
import React, { useState } from 'react';
import LoginForm from '../components/form/LoginForm';
import Navbar from '../components/commons/Navbar';



function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div>
            <h2>Login Page</h2>
            <LoginForm 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn} 
                username={username} 
                handleUsernameChange={handleUsernameChange} 
                password={password} 
                handlePasswordChange={handlePasswordChange} 
            />
        </div>
    );
}

export default Login;