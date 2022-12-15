import { useState, useEffect, useContext } from 'react';
import './App.css';
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import AdminAddMenuItem from "./pages/AdminAddMenuItem";
import NoMatch from "./pages/NoMatch";
import FindUs from "./pages/FindUs";
import AboutUs from "./pages/AboutUs";
// import Contact from "./pages/Contact";
import AdminEditMenuItem from './pages/AdminEditMenuItem';
import AdminDeleteMenuItem from './pages/AdminDeleteMenuItem';
import AdminMain from './pages/AdminMain';
import AdminAddCategory from "./pages/AdminAddCategory";
import AdminDeleteCategory from './pages/AdminDeleteCategory';
import { MenuContext } from './ctx/menuContext';
import API from './utils/API';

function App() {
  const { setMenu, setCategories } = useContext(MenuContext)

  useEffect(() => {
    loadMenuItems()
    loadCategories()
  }, [])

  const loadMenuItems = async () => {
    try {
      const res = await API.getMenuItems()
      setMenu(res?.data)
    } catch (err) {
      console.log(err)
    }
  }

  const loadCategories = async () => {
    try {
      const res = await API.getCategories()
      setCategories(res?.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container bg-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/api/menu" element={<Menu />} />
        <Route path="/location" element={<FindUs />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/admin/addItem" element={<AdminAddMenuItem />} />
        <Route path="/admin/editItem" element={<AdminEditMenuItem />} />
        <Route path="/admin/deleteItem" element={<AdminDeleteMenuItem />} />
        <Route path="/admin/deleteItem" element={<AdminDeleteMenuItem />} />
        <Route path="/admin/main" element={<AdminMain />} />
        <Route path="/admin/addcategory" element={<AdminAddCategory />} />
        <Route path="/admin/deletecategory" element={<AdminDeleteCategory />} />
        <Route element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
