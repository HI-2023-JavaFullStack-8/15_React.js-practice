import { Outlet } from "react-router-dom";
import Headers from "../components/commons/Header";
import Navbar from "../components/commons/Navbar";

function Layout() {
    return(
        <>
            <Headers />
            <Navbar />
            <Outlet />
        </>
    );
}

export default Layout;