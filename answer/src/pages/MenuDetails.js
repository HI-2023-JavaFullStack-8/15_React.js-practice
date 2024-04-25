import Menu from "../components/items/menu";

function MenuDetails() {
    
    return (
        <div>
            <h1>메뉴 상세</h1>
            <button>메뉴 수정</button>
            <button>메뉴 삭제</button>
            <Menu />
        </div>
    );
}   

export default MenuDetails;