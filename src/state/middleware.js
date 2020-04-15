import { getProjects, gotProjects, failedGettingProjects } from "./actions";
import axios from "axios";

const axiosServer = axios.create({
  baseURL: "http://134.122.97.83/api/repositories",
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
