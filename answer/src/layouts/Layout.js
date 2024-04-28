import { Outlet } from "react-router-dom";
import Header from "../components/commons/Header";
import NavBar from "../components/commons/Navbar";



function Layout() {

    return (
        <>
        <Header/>
        <NavBar/>
        <Outlet/>
        </>


    );



}

export default Layout;