import { connect } from "react-redux";
import Projects from "../../pages/Projects";

const mapStateToProps = (state) => {
  return {
    projectsLoading: state.projectsFetching,
    errorFetchingProjects: state.projectsError,
  };
};

const ProjectsContainer = connect(mapStateToProps)(Projects);

export default ProjectsContainer;
