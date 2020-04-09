import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarWithRouter from "./components/Navbar";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
// @ts-ignore
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div className="px-sm-5 min-vh-100">
      <Router>
        <NavbarWithRouter />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
