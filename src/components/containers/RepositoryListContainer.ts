import { connect, ConnectedProps } from "react-redux";
import { Project, WebState } from "../../state/types";
import RepositoryList from "../ui/RepositoryList";

const mapStateToProps = (state: WebState) => {
  let tags: string[] = [];
  state.projects.forEach(
    (project: Project) => (tags = tags.concat(project.mabe.tag_tools))
  );
  tags = tags.filter((item, index) => {
    return tags.indexOf(item) === index;
  });

  let projects: Project[] = state.projects;
  if (state.filteringByTags) {
    projects = projects.filter((project) =>
      project.mabe.tag_tools.some((tag) => state.tagsSelected.includes(tag))
    );
  }

  return {
    projects: projects,
    filteringByTags: state.filteringByTags,
    tags: tags,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    seeProject: (id: string) => {
      console.log("sw");
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export type Props = PropsFromRedux;

export default connector(RepositoryList);
