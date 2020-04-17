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
          console.log(aux);
          aux.mocks = project.mabe.path_to_mocks.map((mockPath) => {
            return `https://cdn.jsdelivr.net/gh/Rahuvich/${project.name}@master${mockPath}`;
          });

          return aux;
        });

        console.log(result.data);

        return dispatch(gotProjects(newProjects));
      })
      .catch((error) => {
        console.log(error);
        return dispatch(failedGettingProjects());
      });
  };
}
