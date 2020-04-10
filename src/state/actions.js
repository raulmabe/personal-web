// Projects
export const GET_PROJECTS = "GET_PROJECTS";
export function getProjects() {
  return {
    type: GET_PROJECTS,
  };
}

export const GOT_PROJECTS = "GOT_PROJECTS";
export function gotProjects(projects) {
  return {
    type: GOT_PROJECTS,
    projects,
  };
}

export const FAILED_ON_GETTING_PROJECTS = "FAILED_ON_GETTING_PROJECTS";
function failedGettingProjects() {
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
