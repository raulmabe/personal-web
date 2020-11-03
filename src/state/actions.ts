import {
  GET_PROJECTS,
  GOT_PROJECTS,
  FAILED_ON_GETTING_PROJECTS,
  ProjectsActionTypes,
  Project,
  ADD_TAG,
  REMOVE_TAG,
  REMOVE_FILTERING,
  TagsActionTypes,
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

// Tags
export function addTag(tag: string): TagsActionTypes {
  return {
    type: ADD_TAG,
    tag: tag,
  };
}

export function removeTag(tag: string): TagsActionTypes {
  return {
    type: REMOVE_TAG,
    tag: tag,
  };
}

export function removeFilter(): TagsActionTypes {
  return {
    type: REMOVE_FILTERING,
  };
}
