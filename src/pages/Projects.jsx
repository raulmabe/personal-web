import React from "react";
import RepositoryListContainer from "../components/containers/RepositoryListContainer";
import LoadingContent from "../components/ui/LoadingContent";
import GithubBanner from "../components/ui/GithubBanner";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

class Projects extends React.Component {
  render() {
    // return (
    //   <ReactPlaceholder
    //     showLoadingAnimation={true}
    //     type="media"
    //     rows={7}
    //     ready={!this.props.projectsLoading}
    //     customPlaceholder={<LoadingContent />}
    //   >
    //     <RepositoryListContainer />
    //   </ReactPlaceholder>
    // );

    if (this.props.projectsLoading) {
      return (
        <ReactPlaceholder
          ready={false}
          customPlaceholder={<LoadingContent />}
        />
      );
    } else if (this.props.errorFetchingProjects) {
      return (
        <div className="row h-75 align-items-center container-fluid">
          <div className="col">
            <div className="alert alert-dark" role="alert">
              <h4 className="alert-heading">Maintenance!</h4>
              <p>The server is not available right now. Try again later!</p>
              <hr />
              <p className="mb-0">
                Meanwhile you can{" "}
                <a href="https://github.com/Rahuvich" target="_blank">
                  take a look at my Github
                </a>
                !
              </p>
            </div>
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
