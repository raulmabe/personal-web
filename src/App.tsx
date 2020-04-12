import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarWithRouter from "./components/Navbar";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
// @ts-ignore
import Contact from "./pages/Contact.jsx";
import ProjectsContainer from "./components/containers/ProjectsContainer";

function App() {
  return (
    <div className="px-sm-5 min-vh-100">
      <Router>
        <NavbarWithRouter />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={ProjectsContainer} />
            <Route path="/about" component={About} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
