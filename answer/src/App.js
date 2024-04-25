import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import Menus from "./pages/Menus";
import Login from "./pages/Login";
import InsertMenu from "./pages/InsertMenu";
import MenuDetails from "./pages/MenuDetails";
import UpdateMenu from "./pages/UpdateMenu";
import Error from "./pages/Error";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="menu">
            <Route index element={<Menus />} />
              <Route path=":id" element={<MenuDetails />} />
              <Route path="insert-menu" element={<InsertMenu />} />
              <Route path="update-menu" >
                <Route path=":id" element={<UpdateMenu />} />
              </Route>
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
