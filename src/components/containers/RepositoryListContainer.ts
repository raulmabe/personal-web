import { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { seeProject } from "../../state/actions";
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
    seeProject: (id: string) => {
      dispatch(seeProject(id));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export type Props = PropsFromRedux;

export default connector(RepositoryList);
