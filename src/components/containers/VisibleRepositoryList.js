import { connect } from "react-redux";
import { fetchProjects } from "../../state/actions";
import RepositoryList from "../RepositoryList";

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProjectsFromGithub: () => {
      dispatch(fetchProjects());
    },
  };
};

const VisibleRepositoryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryList);

export default VisibleRepositoryList;
