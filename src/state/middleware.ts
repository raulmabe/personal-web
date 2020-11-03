import { getProjects, gotProjects, failedGettingProjects } from "./actions";
import axios, { AxiosResponse } from "axios";
import { ThunkAction } from "redux-thunk";
import { Project, WebState } from "./types";
import { Action } from "redux";
import util from "util";

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
        const projects: any = result.data;

        const newProjects: Project[] = projects.map((project: any) => {
          var projectModel: Project = project;

          projectModel.mabe.tag_tools = project.mabe.tag_tools.map((tag) =>
            tag.toLowerCase()
          );

          if (project.mabe.mocks_angle && project.mabe.mocks_angle.length > 0) {
            const array: boolean[] = new Array(project.mabe.mocks_angle.length);
            for (let i = 0; i < array.length; ++i) {
              array[i] = project.mabe.mocks_angle[i] === "90";
            }
            projectModel.mabe.vertical_images = array;
          } else if (project.mabe.vertical_images) {
            projectModel.mabe.vertical_images = project.mabe.vertical_images;
          } else {
            const array: boolean[] = new Array(project.mabe.link_images.length);
            array.fill(false);
            projectModel.mabe.vertical_images = array;
          }

          return projectModel;
        });

        return dispatch(gotProjects(newProjects));
      })
      .catch((error) => {
        return dispatch(failedGettingProjects());
      });
  };
}
