import { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  seeNextProject,
  seePreviousProject,
  seeProject,
} from "../../state/actions";
import { WebState } from "../../state/types";
import RepositoryList from "../ui/RepositoryList";

const mapStateToProps = (state: WebState) => {
  return {
    projects: state.projects,
    activeProject: state.activeProject,
  };
};

const mapDispatchToProps = (dispatch: any) => {
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

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export type Props = PropsFromRedux;

export default connector(RepositoryList);
