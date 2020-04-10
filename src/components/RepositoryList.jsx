import React from "react";
import RepositoryItem from "./RepositoryItem";

function RepositoryList({ projects }) {
  console.log(projects);
  return projects.map((node) => (
    <div key={node.id}>
      <div className="repository-container">
        <RepositoryItem {...node} />
      </div>
    </div>
  ));
}

export default RepositoryList;
