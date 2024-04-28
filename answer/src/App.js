import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';

import Menus from './pages/Menus';
import Login from './pages/Login';
import Menu from './components/item/Menu';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="menus" >
        <Route index element={<Menus />} />
            <Route path=":id" element={<Menu />} /> 
          </Route>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
