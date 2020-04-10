import axios from "axios";

const GET_PUBLIC_REPOSITORIES = `
  query {
    viewer {
      repositories(
        last: 100
        orderBy: { field: CREATED_AT, direction: DESC }
        privacy: PUBLIC
      ) {
        nodes {
          id
          name
          descriptionHTML
          createdAt
          url
          readme: object(expression: "master:README.md") {
            ... on Blob {
              text
            }
          }
        }
      }
    }
  }
`;

const axiosGithubGraphQL = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

export const GET_PROJECTS = "GET_PROJECTS";
export function getProjects() {
  return {
    type: GET_PROJECTS,
  };
}

export const GOT_PROJECTS = "GOT_PROJECTS";
function gotProjects(projects) {
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

// Thunk middleware
export function fetchProjects() {
  return function (dispatch) {
    dispatch(getProjects());

    return axiosGithubGraphQL
      .post("", { query: GET_PUBLIC_REPOSITORIES })
      .then((result) =>
        dispatch(gotProjects(result.data.data.viewer.repositories.nodes))
      );
  };
}
