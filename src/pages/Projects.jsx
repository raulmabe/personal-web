import React from "react";
// import RepositoryList from "../components/RepositoryList.jsx";
import VisibleRepositoryList from "../components/containers/VisibleRepositoryList";

class Projects extends React.Component {
  render() {
    return <VisibleRepositoryList />;
    // return (
    //   <Query query={GET_PUBLIC_REPOSITORIES}>
    //     {({ data, error, loading }) => {
    //       if (error) return <div>error</div>;
    //       else if (loading || !data) return <div>loading</div>;
    //       const { viewer } = data;
    //       return <RepositoryList repositories={viewer.repositories} />;
    //     }}
    //   </Query>
    // );
  }
}

export default Projects;
