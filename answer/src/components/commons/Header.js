import '../../css/header.css'; 
import { useSelector, useDispatch } from 'react-redux';


function Header () {

    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const username = useSelector(state => state.login.username);

    const dispatch = useDispatch();


    return (
        <div className="header-container">
        <h1 className="title">안녕하세요 괴식당 입니다🥶</h1>
        {isLoggedIn && (
        <p className="hi-greeting">어서오세요 {username} 님!</p>  
        )}
        </div>
    );
}

export default Header;