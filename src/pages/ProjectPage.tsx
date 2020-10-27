import React from "react";
import { Project, WebState } from "../state/types";
import { RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";

interface Props extends RouteComponentProps<{ id: string }> {}

const ProjectPage: React.FC<Props> = (props: Props) => {
  const id = props.match.params.id;
  const project: Project = useSelector<WebState, Project>((state) =>
    state.projects.find((project) => project.name == id)
  );

  return (
    <div>
      Project {id} {project.name}
    </div>
  );
};

export default ProjectPage;
