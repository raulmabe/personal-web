import {
  GET_PROJECTS,
  GOT_PROJECTS,
  FAILED_ON_GETTING_PROJECTS,
  ProjectsActionTypes,
  Project,
} from "./types";

// Projects
export function getProjects(): ProjectsActionTypes {
  return {
    type: GET_PROJECTS,
  };
}

export function gotProjects(projects: Project[]): ProjectsActionTypes {
  return {
    type: GOT_PROJECTS,
    projects,
  };
}

export function failedGettingProjects(): ProjectsActionTypes {
  return {
    type: FAILED_ON_GETTING_PROJECTS,
  };
}

export const SEE_A_PROJECT = "SEE_A_PROJECT";
export function seeProject(id: string): ProjectsActionTypes {
  return {
    type: SEE_A_PROJECT,
    id: id,
  };
}
