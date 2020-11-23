import {
  GET_PROJECTS,
  GOT_PROJECTS,
  FAILED_ON_GETTING_PROJECTS,
  ActionTypes,
  WebState,
  ADD_TAG,
  REMOVE_TAG,
  REMOVE_FILTERING,
} from "./types";

const initialState: WebState = {
  projects: [],
  isLoading: false,
  error: false,
  filteringByTags: false,
  tagsSelected: [],
};

export function reducer(
  prevState = initialState,
  action: ActionTypes
): WebState {
  switch (action.type) {
    case GET_PROJECTS:
      return Object.assign({}, prevState, {
        isLoading: true,
        error: false,
      });
    case GOT_PROJECTS:
      return Object.assign({}, prevState, {
        isLoading: false,
        projects: action.projects,
        stats: action.stats,
        error: false,
      });
    case FAILED_ON_GETTING_PROJECTS:
      return Object.assign({}, prevState, {
        isLoading: false,
        error: true,
        projects: [],
      });

    case ADD_TAG:
      const newTags: string[] = prevState.tagsSelected;

      newTags.unshift(action.tag);
      return Object.assign({}, prevState, {
        filteringByTags: true,
        tagsSelected: newTags,
      });
    case REMOVE_TAG:
      const tags: string[] = prevState.tagsSelected.filter(
        (tag) => tag.toLowerCase() !== action.tag.toLowerCase()
      );

      return Object.assign({}, prevState, {
        filteringByTags: tags.length !== 0,
        tagsSelected: tags,
      });
    case REMOVE_FILTERING:
      return Object.assign({}, prevState, {
        filteringByTags: false,
        tagsSelected: [],
      });
    default:
      return prevState;
  }
}
