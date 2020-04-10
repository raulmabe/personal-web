import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import RepositoryList from "../components/RepositoryList";

const GET_PUBLIC_REPOSITORIES = gql`
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

class Projects extends React.Component {
  render() {
    return (
      <Query query={GET_PUBLIC_REPOSITORIES}>
        {({ data, error, loading }) => {
          if (error) return <div>error</div>;
          else if (loading || !data) return <div>loading</div>;
          const { viewer } = data;

          return <RepositoryList repositories={viewer.repositories} />;
        }}
      </Query>
    );
  }
}

export default Projects;
