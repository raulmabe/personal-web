import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavbarWithRouter from "./components/Navbar";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProjectsContainer from "./components/containers/ProjectsContainer";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();
  return (
    <div className="px-sm-5 min-vh-100">
      <Router>
        <NavbarWithRouter />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={ProjectsContainer} />
            <Route path="/about" component={About} />
            <Route path="/404" component={NotFound} />
            <Redirect
              from="*"
              push
              to={{
                pathname: "/404",
                state: {
                  urlAccessed: history.location.pathname,
                },
              }}
            />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
