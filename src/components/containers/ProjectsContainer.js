import { connect } from "react-redux";
import Projects from "../../pages/Projects";

const mapStateToProps = (state) => {
  return {
    projectsLoading: state.isLoading,
    errorFetchingProjects: state.error,
  };
};

const ProjectsContainer = connect(mapStateToProps)(Projects);

export default ProjectsContainer;
