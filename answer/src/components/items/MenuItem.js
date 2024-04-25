import { Link } from "react-router-dom";

function MenuItem() {

    return (
        <Link to={ `menu/${menu.id}`}>
            <div>
                <h3>메뉴이름: </h3>
                <h3>메뉴가격: </h3>
                <h3>메뉴종류: </h3>
            </div>
        </Link>
    );

}

export default MenuItem;