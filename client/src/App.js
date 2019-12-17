import React from 'react';
import './App.css';
import "./index.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container bg-main">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
