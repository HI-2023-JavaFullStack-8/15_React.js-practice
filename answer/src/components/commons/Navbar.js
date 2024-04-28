import {NavLink} from 'react-router-dom';

function NavBar(){

    return (
        <div>
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/menus">MENUS</NavLink></li>
                <li><NavLink to="/login">LOGIN</NavLink></li>
            </ul>
        </div>
    );



}

export default NavBar;