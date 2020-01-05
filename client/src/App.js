import React from 'react';
import './App.css';
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import AdminAddMenuItem from "./pages/AdminAddMenuItem";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div className="container bg-main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/api/menu" component={Menu} />
          <Route exact path="/admin/addItem" component={AdminAddMenuItem} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
