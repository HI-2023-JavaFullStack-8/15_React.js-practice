import { Link } from "react-router-dom";

function MenuCard({ menu }) {
    return (
        menu &&
        <Link to={`/menu/${menu.id}`}>
            <div className="menuItem">
                <h5>{menu.menuName}</h5>
                <h5>{menu.menuPrice}</h5>
                <h5>{menu.categoryName}</h5>
            </div>
        </Link>
    );
}

export default MenuCard;