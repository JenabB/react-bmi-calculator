import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Result from "./pages/Result";

export default function Navigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/result" component={Result} />
      </Switch>
    </Router>
  );
}
