import { getProjects, gotProjects, failedGettingProjects } from "./actions";
import axios, { AxiosResponse } from "axios";
import { ThunkAction } from "redux-thunk";
import { Project, ReposResponse, WebState } from "./types";
import { Action } from "redux";

const axiosServer = axios.create({
  baseURL: "https://raulmabe.dev/api/repositories",
});

// Thunk middleware
export function fetchProjects(): ThunkAction<
  void,
  WebState,
  unknown,
  Action<string>
> {
  return async function (dispatch) {
    dispatch(getProjects());

    return axiosServer
      .get("")
      .then((result: AxiosResponse<any>) => {
        const response: ReposResponse = result.data;

        const newProjects: Project[] = response.projects.map((project: any) => {
          var projectModel: Project = project;

          projectModel.mabe.tag_tools = project.mabe.tag_tools.map((tag) =>
            tag.toLowerCase()
          );

          return projectModel;
        });

        return dispatch(gotProjects(newProjects, response.stats));
      })
      .catch((error) => {
        return dispatch(failedGettingProjects());
      });
  };
}
