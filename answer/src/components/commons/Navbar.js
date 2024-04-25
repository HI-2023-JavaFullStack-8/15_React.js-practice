import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div style={{marginLeft: '30px', display: 'flex'}}>
            <button>
                <NavLink to="/">MAIN</NavLink>
            </button>
            <button>
                <NavLink to="/menu">MENU</NavLink>
            </button>
            <button>
            <NavLink to="/login">LOGIN</NavLink>
            </button>
        </div>
    );
}

export default Navbar;