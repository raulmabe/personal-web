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

// Stepper Projects
export const NEXT_PROJECT = "NEXT_PROJECT";
export function seeNextProject() {
  return {
    type: NEXT_PROJECT,
  };
}

export const PREV_PROJECT = "PREV_PROJECT";
export function seePreviousProject() {
  return {
    type: PREV_PROJECT,
  };
}

export const SEE_A_PROJECT = "SEE_A_PROJECT";
export function seeProject(index) {
  return {
    type: SEE_A_PROJECT,
    index: index,
  };
}
