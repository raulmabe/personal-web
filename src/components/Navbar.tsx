import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class MyNavBar extends React.Component<any> {
  props: any;
  render() {
    return (
      <div className="flex flex-row justify-between items-center px-2 sm:px-10 md:px-20 py-10 uppercase tracking-widest">
        <Link
          to="/"
          className="flex flex-col monospaced font-extrabold text-xl"
        >
          M A
          <br />B E
        </Link>

        <div className="flex flex-row md:space-x-8">
          <Link
            to="/projects"
            className={
              this.props.location.pathname === "/projects"
                ? "text-gradient font-semibold"
                : "btn btn-primary"
            }
          >
            projects
          </Link>
          <Link
            to="/about"
            className={
              this.props.location.pathname === "/about"
                ? "text-gradient font-semibold"
                : "dark:text-gray-300  text-gray-600"
            }
          >
            about
          </Link>
        </div>
      </div>
    );
  }
}

const NavbarWithRouter = withRouter(MyNavBar);
export default NavbarWithRouter;
