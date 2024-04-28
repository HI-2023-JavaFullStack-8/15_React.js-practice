import { Navigate } from "react-router-dom";
import LoginForm from "../components/form/LoginForm";

function Login() {

    const loginStatus = !!localStorage.getItem('isLogin');
    if (loginStatus) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <div>
            <h1>로그인페이지</h1>
            <LoginForm />
        </div>
    );
}

export default Login;