import {
  GET_PROJECTS,
  GOT_PROJECTS,
  FAILED_ON_GETTING_PROJECTS,
  ProjectsActionTypes,
  WebState,
} from "./types";

const initialState: WebState = {
  projects: [],
  projectsFetching: false,
  projectsError: false,
  activeProject: 0,
};

export function reducer(
  prevState = initialState,
  action: ProjectsActionTypes
): WebState {
  switch (action.type) {
    case GET_PROJECTS:
      return Object.assign({}, prevState, {
        projectsFetching: true,
        projectsError: false,
      });
    case GOT_PROJECTS:
      return Object.assign({}, prevState, {
        projectsFetching: false,
        projects: action.projects,
        projectsError: false,
      });
    case FAILED_ON_GETTING_PROJECTS:
      return Object.assign({}, prevState, {
        projectsFetching: false,
        projectsError: true,
        projects: [],
      });
    default:
      return prevState;
  }
}
