import {
  GET_PROJECTS,
  GOT_PROJECTS,
  FAILED_ON_GETTING_PROJECTS,
  ActionTypes,
  WebState,
  ADD_TAG,
  REMOVE_TAG,
  REMOVE_FILTERING,
  Sort,
  CHANGE_SORT,
  Project,
  Mabe,
  CHANGE_THEME,
} from "./types";

const initialState: WebState = {
  projects: [],
  sort: Sort.DATE_DESC,
  isLoading: false,
  error: false,
  filteringByTags: false,
  tagsSelected: [],
  darkMode: true,
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
        projects: sortProjects(action.projects, Sort.RELEVANCE),
        stats: action.stats,
        error: false,
        sort: Sort.RELEVANCE,
      });
    case FAILED_ON_GETTING_PROJECTS:
      return Object.assign({}, prevState, {
        isLoading: false,
        error: true,
        projects: [],
      });

    case CHANGE_SORT:
      return Object.assign({}, prevState, {
        sort: action.sort,
        projects: sortProjects(prevState.projects, action.sort),
      });

    case CHANGE_THEME:
      return Object.assign({}, prevState, {
        darkMode: action.darkTheme,
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

function sortProjects(projects: Project[], sort: Sort) {
  if (sort === Sort.DATE_ASC) {
    return projects.sort((project1, project2) => {
      if (project1.createdAt > project2.createdAt) return 1;
      else return -1;
    });
  } else if (sort === Sort.DATE_DESC) {
    return projects.sort((project1, project2) => {
      if (project1.createdAt < project2.createdAt) return 1;
      else return -1;
    });
  } else if (sort === Sort.RELEVANCE) {
    return projects.sort((project1, project2) => {
      if (!project1.mabe.assets_is_image && project2.mabe.assets_is_image)
        return 1;
      if (project1.mabe.assets_is_image && !project2.mabe.assets_is_image)
        return -1;

      if (project1.mabe.assets_is_image && project2.mabe.assets_is_image) {
        if (isMockVideo(project1.mabe, 0) && !isMockVideo(project2.mabe, 0))
          return -1;
        if (!isMockVideo(project1.mabe, 0) && isMockVideo(project2.mabe, 0))
          return 1;
      }

      if (project1.createdAt > project2.createdAt) return -1;
      else return 0;
    });
  }
  return projects;
}

function isMockVideo(mabe: Mabe, index: number): boolean {
  return (
    mabe.assets_is_image !== undefined &&
    mabe.assets_is_image.length > 0 &&
    !mabe.assets_is_image[index]
  );
}
