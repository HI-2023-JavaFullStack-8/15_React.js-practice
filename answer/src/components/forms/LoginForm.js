import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAPI } from "../../apis/UersAPI";
import { removeLoginUser } from "../../modules/LoginModules";

function LoginForm() {

    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(false);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [loginInfo, setLoginInfo] = useState(
        {
            id: '',
            password: ''    
        }
    );

    const result = useSelector(state => state.userReducer);
    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(() => {
            // fetch('/mock/db.json')
            // .then(response => response.json())
            // .then(data => setUsers(data));

            if (result?.message) {
                alert('아이디와 비밀번호를 확인해주세요');
                setLoginInfo(
                    {
                        id: '',
                        password: ''
                    }
                );
                dispatch(removeLoginUser());
            } else if (loginStatus) {
                navigate('/');
            }

        }, [result]
    );
    
    const handleIdChange = (e) => {
        setId(e.target.value);
        const { name, value } = e.target;
        setLoginInfo({
            ...loginInfo,
            [name]: value
        });
    };

    const handlePassChange = (e) => {
        setPassword(e.target.value);
        const { name, value } = e.target;
        setLoginInfo({
            ...loginInfo,
            [name]: value
        });
    };

    // const authenticateUser = () => {
    //     const user = users.find(u => u.id === loginInfo.id && u.password === loginInfo.password);
    //     if(user) {
    //         console.log('로그인 성공!');
    //     } else {
    //         console.log('로그인 실패!');
    //     }
    // };

    const onClickHandler = () => {
        setIsLogin(true);
        dispatch(getUserAPI(loginInfo));
        // authenticateUser();
    };

    if(!isLogin) {
        return (
            <div>
                <h4>로그인</h4>
                <br />
                <label>ID : </label>
                <input type="text" name="id" onChange={handleIdChange} value={loginInfo.id} />
                <label>PASSWORD : </label>
                <input type="password" name="password" onChange={handlePassChange} value={loginInfo.password} />
                <button onClick={onClickHandler} type="submit">Login</button>
            </div>
        );
    } else {
        return (
            <>
            <Link to="/">로그아웃</Link>
            </>
        )
    }
}

export default LoginForm;
