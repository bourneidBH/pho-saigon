import React from 'react';
import './App.css';
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import AdminAddMenuItem from "./pages/AdminAddMenuItem";
import NoMatch from "./pages/NoMatch";
import FindUs from "./pages/FindUs";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import AdminEditMenuItem from './pages/AdminEditMenuItem';
import AdminDeleteMenuItem from './pages/AdminDeleteMenuItem';
import AdminMain from './pages/AdminMain';

function App() {
  return (
    <Router>
      <div className="container bg-main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/api/menu" component={Menu} />
          <Route exact path="/location" component={FindUs} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/admin/addItem" component={AdminAddMenuItem} />
          <Route exact path="/admin/editItem" component={AdminEditMenuItem} />
          <Route exact path="/admin/deleteItem" component={AdminDeleteMenuItem} />
          <Route exact path="/admin/deleteItem" component={AdminDeleteMenuItem} />
          <Route exact path="/admin/main" component={AdminMain} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
