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
import {  useSelector } from "react-redux";
import ToggleTheme from "./components/ui/ToggleTheme";
import { WebState } from "./state/types";
import classNames from "classnames";

function App() {
  const isDarkMode: boolean = useSelector<WebState, boolean>(
    (state) => state.darkMode
  );
  const history = createBrowserHistory();
  return (
    <div
      className={classNames({
        "dark": isDarkMode,
      })}
    >
      <div className=" dark:bg-dark bg-white dark:text-gray-200 text-blue-dark">
        <ToggleTheme />
        <Router>
          <div className=" min-h-screen grid-nav-content">
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
    </div>
  );
}

export default App;
