import { Navigate } from "react-router-dom";
import MenuInsertForm from '../components/form/MenuInsertForm';


function InsertMenu() {
    const loginStatus = !!localStorage.getItem('isLogin');

    if(!loginStatus) {
        return <Navigate to="/login" replace={ true }/>
    }

    return(
        <>  
            <h1>메뉴 등록 페이지</h1>
            <MenuInsertForm />
        </>
    );
}

export default InsertMenu;