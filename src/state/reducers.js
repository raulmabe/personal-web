import {
  GET_PROJECTS,
  GOT_PROJECTS,
  FAILED_ON_GETTING_PROJECTS,
} from "./actions";

const initialState = {
  projects: [],
  projectsFetching: false,
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
        projectsFetching: false,
        projects: [],
      });
    default:
      return prevState;
  }
}
