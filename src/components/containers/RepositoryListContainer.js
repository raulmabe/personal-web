import { connect } from "react-redux";
import {
  seeNextProject,
  seePreviousProject,
  seeProject,
} from "../../state/actions";
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
    seeProject: (index) => {
      dispatch(seeProject(index));
    },
  };
};

const RepositoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryList);

export default RepositoryListContainer;
