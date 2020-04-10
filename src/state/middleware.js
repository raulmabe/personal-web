import { getProjects, gotProjects } from "./actions";
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
