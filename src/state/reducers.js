import {
  GET_PROJECTS,
  GOT_PROJECTS,
  FAILED_ON_GETTING_PROJECTS,
  NEXT_PROJECT,
  PREV_PROJECT,
  SEE_A_PROJECT,
} from "./actions";

const initialState = {
  projects: [],
  projectsFetching: false,
  activeProject: 0,
};

export function reducer(prevState = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return Object.assign({}, prevState, {
        projectsFetching: true,
      });
    case GOT_PROJECTS:
      return Object.assign({}, prevState, {
        projectsFetching: false,
        projects: action.projects,
      });
    case FAILED_ON_GETTING_PROJECTS:
      return Object.assign({}, prevState, {
        // projectsFetching: false,
        projects: [],
      });
    case NEXT_PROJECT:
      let nextProject = prevState.activeProject + 1;
      if (nextProject > prevState.projects.length) {
        nextProject = prevState.projects.length;
      }
      return Object.assign({}, prevState, {
        activeProject: nextProject,
      });
    case PREV_PROJECT:
      let prevProject = prevState.activeProject - 1;
      if (prevProject < 0) {
        prevProject = 0;
      }
      return Object.assign({}, prevState, {
        activeProject: prevProject,
      });
    case SEE_A_PROJECT:
      if (action.index < 0 || action.index > prevState.projects.length)
        return prevState;
      return Object.assign({}, prevState, {
        activeProject: action.index,
      });
    default:
      return prevState;
  }
}
