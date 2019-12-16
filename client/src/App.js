import React from 'react';
import './App.css';
import "./index.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container className="bg-white">
        <Navbar />
      </Container>
    </Router>
  );
}

export default App;
