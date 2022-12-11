import React from 'react';
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

function App() {
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
        <Route element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
