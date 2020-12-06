import React from "react";
import RepositoryListContainer from "../components/containers/RepositoryListContainer";
import LoadingContent from "../components/ui/LoadingContent";
import GithubBanner from "../components/ui/GithubBanner";

class Projects extends React.Component {
  render() {
    if (this.props.projectsLoading) {
      return <LoadingContent />;
    } else if (this.props.errorFetchingProjects) {
      return (
        <div className="flex flex-row justify-center items-center">
          <div className="bg-gray-100 rounded-2xl text-gray-800 px-4 py-4 shadow-xl">
            <h3 className="my-2">My projects are unavailable</h3>
            <div className=" h-0.5 bg-gray-700 opacity-25 rounded-full w-full  my-2"></div>
            <p>I am doing some tweakings in my back-end. Try again later!</p>
            <p className="mb-0">
              Meanwhile you can take a look at{" "}
              <a
                href="https://github.com/Rahuvich"
                rel="noopener noreferrer"
                target="_blank"
                className="text-primary-blue"
              >
                my Github
              </a>
              !
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <RepositoryListContainer />
          <GithubBanner />
        </div>
      );
    }
  }
}

export default Projects;
