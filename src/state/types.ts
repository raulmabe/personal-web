export interface Project {
  id: string;
  createdAt: string;
  mocks: string | string[];
  name: string;
  descriptionHTML: string;
  url: string;
  readme: string;
  mabe: any;
}

export interface WebState {
  projects: Project[];
  projectsFetching: boolean;
  projectsError: boolean;
  activeProject: number;
}

// Projects Actions
export const GET_PROJECTS = "GET_PROJECTS";
interface GetProjectsAction {
  type: typeof GET_PROJECTS;
}

export const GOT_PROJECTS = "GOT_PROJECTS";
interface GotProjectsAction {
  type: typeof GOT_PROJECTS;
  projects: Project[];
}

export const FAILED_ON_GETTING_PROJECTS = "FAILED_ON_GETTING_PROJECTS";
interface FailedOnGettingProjectsAction {
  type: typeof FAILED_ON_GETTING_PROJECTS;
}

export type ProjectsActionTypes =
  | GetProjectsAction
  | GotProjectsAction
  | FailedOnGettingProjectsAction;
