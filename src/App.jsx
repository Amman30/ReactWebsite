import React from "react";
import ReactDom from "react-dom";
import Heading from "./Heading/Heading.jsx";
import Topbar from "./Heading/Topbar.jsx";
import Home from "./pages/home/Home.jsx";
import Write from "./write/Write.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Footer from "./footer/Footer.jsx";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";







function App() {
  return (
<Router>

    <Topbar />

<Switch>
<Route exact path="/aboutme">
<Home />
</Route>
<Route exact path="/">
<Heading />
</Route>
<Route exact path="/register">
<Register />
</Route>
<Route exact path="/Login">
<Login />
</Route>
<Route exact path="/Settings">
<Settings />
</Route>
<Route exact path="/Heading">
<Heading />
</Route>
<Route exact path="/Write">
<Write />
</Route>

</Switch>
  <Footer />
</Router>

  );
}

export default App;
