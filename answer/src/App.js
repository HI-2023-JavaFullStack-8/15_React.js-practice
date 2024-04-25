import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from './Store';
import Layout from "./layouts/Layout";
import Menus from "./pages/Menus";
import MenuDetail from "./pages/MenuDetail";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="menu">
              <Route index element={<Menus />} />
              <Route path=":id" element={<MenuDetail />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;