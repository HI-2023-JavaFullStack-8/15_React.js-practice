import { Navigate } from "react-router-dom";
import MenuUpdateForm from '../components/form/MenuUpdateForm';

function UpdateMenu() {
    const loginStatus = !!localStorage.getItem('isLogin');

    if(!loginStatus) {
        return <Navigate to="/login" replace={ true }/>
    }

    return(
        <>  
            <h1>메뉴 수정 페이지</h1>
            <MenuUpdateForm />
        </>
    );
}   

export default UpdateMenu;