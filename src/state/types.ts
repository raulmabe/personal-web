export interface Mabe {
  title: string;
  version: string;
  tag_tools: string[];
  platforms: string[];
  private: boolean;
  link_images?: string | string[];
  vertical_images?: boolean[];
  link_videos?: string[];
  vertical_videos?: boolean[];
  link?: string;
  link_text?: string;
}
export interface Project {
  id: string;
  createdAt: string;
  name: string;
  descriptionHTML: string;
  url: string;
  readme: string;
  mabe: Mabe;
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
