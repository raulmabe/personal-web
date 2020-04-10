import { connect } from "react-redux";
import { fetchProjects } from "../../state/middleware";
import { seeNextProject, seePreviousProject } from "../../state/actions";
import RepositoryList from "../ui/RepositoryList";

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    activeProject: state.activeProject,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    seeNextProject: () => {
      dispatch(seeNextProject());
    },
    seePrevProject: () => {
      dispatch(seePreviousProject());
    },
  };
};

const RepositoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryList);

export default RepositoryListContainer;
