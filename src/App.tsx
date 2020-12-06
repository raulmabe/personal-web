import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavbarWithRouter from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/ProjectPage";
import ProjectsContainer from "./components/containers/ProjectsContainer";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();
  return (
    <div className="dark">
      <Router>
        <div className="dark:bg-dark bg-gray-50 min-h-screen grid-nav-content dark:text-gray-200 text-gray-800">
          <NavbarWithRouter />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={ProjectsContainer} />
            <Route path="/about" component={About} />
            <Route path="/project/:id" component={ProjectPage} />
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
        </div>
      </Router>
    </div>
  );
}

export default App;
