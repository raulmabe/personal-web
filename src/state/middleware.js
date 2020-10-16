import { getProjects, gotProjects, failedGettingProjects } from "./actions";
import axios from "axios";

const axiosServer = axios.create({
  baseURL: "https://raulmabe.dev/api/repositories",
});

// Thunk middleware
export function fetchProjects() {
  return function (dispatch) {
    dispatch(getProjects());

    return axiosServer
      .get("")
      .then((result) => {
        const projects = result.data;

        const newProjects = projects.map((project) => {
          var aux = project;

          aux.mocks = project.mabe.link_images;

          return aux;
        });

        return dispatch(gotProjects(newProjects));
      })
      .catch((error) => {
        return dispatch(failedGettingProjects());
      });
  };
}
