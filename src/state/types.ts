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

  filteringByTags: boolean;
  tagsSelected: string[];
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

// Tag Actions
export const ADD_TAG = "ADD_TAG";
interface AddTag {
  type: typeof ADD_TAG;
  tag: string;
}

export const REMOVE_TAG = "REMOVE_TAG";
interface RemoveTag {
  type: typeof REMOVE_TAG;
  tag: string;
}

export const REMOVE_FILTERING = "REMOVE_FILTERING";
interface RemoveFiltering {
  type: typeof REMOVE_FILTERING;
}

export type TagsActionTypes = AddTag | RemoveTag | RemoveFiltering;

export type ActionTypes = TagsActionTypes | ProjectsActionTypes;
