function LoginForm() {
    return (
        <div>
            <h4>로그인</h4>
            <br />
            <label>ID : </label>
            <input>{id}</input>
            <label>PASSWORD : </label>
            <input>{password}</input>
            <button>Login</button>
        </div>
    );
}

export default LoginForm;