import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Layout from "./layouts/Layout";
import Menus from "./pages/Menus";
import MenuDetail from "./pages/MenuDetail";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMenuAPI } from "./apis/MenuAPICalls";
import Main from "./pages/Main";
import Login from "./pages/Login";
import MenuModify from "./pages/MenuModify";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuAPI());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="menus">
            <Route index element={<Menus />} />
            <Route path="detail/:menuId" element={<MenuDetail />} />
            <Route path="modify/:menuId" element={<MenuModify />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Main />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;