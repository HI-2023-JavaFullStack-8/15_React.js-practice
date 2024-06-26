import itemStyle from './MenuItem.module.css';
import { Link } from 'react-router-dom';

function MenuItem({ menu }) {
    const { detail } = menu;

    const addCommasToNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    console.log(menu);

    return (
        <Link to={`/menus/detail/${menu.id}`}>
            <div className={itemStyle.MenuItem} style={{ textAlign: 'center' }}>
                {detail && detail.image && (
                    <img src={detail.image} style={{ maxWidth: '100%', height: 300 }} alt='No image'/>
                )}
                <h3 style={{textAlign: 'left', margin: '0 0 0 10px'}}>Menu: {menu.menuName}</h3>
                <h3 style={{textAlign: 'left', margin: '0 0 0 10px'}}>Price: KRW {addCommasToNumber(menu.menuPrice)}</h3>
            </div>
        </Link>
    );
}

export default MenuItem;
