import { getProjects, gotProjects, failedGettingProjects } from "./actions";
import axios from "axios";

const axiosServer = axios.create({
  baseURL: "https://www.raulmabe.dev/api/repositories",
});

// Thunk middleware
export function fetchProjects() {
  return function (dispatch) {
    dispatch(getProjects());

    return axiosServer
      .get("")
      .then((result) => {
        return dispatch(gotProjects(result.data));
      })
      .catch((error) => {
        return dispatch(failedGettingProjects());
      });
  };
}
