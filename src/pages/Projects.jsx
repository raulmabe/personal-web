import React from "react";
import RepositoryListContainer from "../components/containers/RepositoryListContainer";
import LoadingProjects from "../components/ui/LoadingProjects";

class Projects extends React.Component {
  render() {
    if (this.props.projectsLoading) {
      return <LoadingProjects />;
    } else {
      return <RepositoryListContainer />;
    }
  }
}

export default Projects;
