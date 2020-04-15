import React from "react";
import RepositoryListContainer from "../components/containers/RepositoryListContainer";
import MyLoader from "../components/ui/MyLoader";

class Projects extends React.Component {
  render() {
    if (this.props.projectsLoading) {
      return <div>Loading</div>;
    } else {
      return <RepositoryListContainer />;
    }
  }
}

export default Projects;
