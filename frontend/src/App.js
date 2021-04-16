import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./layout/Header";
import Body from "./layout/Body";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Header />
      <Body>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Body>
    </Router>
  );
}

export default App;
