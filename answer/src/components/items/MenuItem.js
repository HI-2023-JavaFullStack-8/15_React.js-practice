import itemStyle from './MenuItem.module.css';
import { Link } from 'react-router-dom';

function MenuItem({ menu }) {
    const { detail } = menu;

    return (
        <Link to={`/menus/detail/${menu.id}`}>
            <div className={itemStyle.MenuItem} style={{ textAlign: 'center' }}>
                {detail && detail.image && (
                    <img src={detail.image} style={{ maxWidth: '100%', height: 300 }} />
                )}
                <h3>Menu: {menu.menuName}</h3>
                <h3>Price: {menu.menuPrice}</h3>
            </div>
        </Link>
    );
}

export default MenuItem;
