import React from "react";
import RepositoryItem from "../RepositoryItem";
import { Props } from "../containers/RepositoryListContainer";

function RepositoryList(props: Props) {
  return (
    <div>
      {props.projects.map((repo, index) => (
        <div className="repository-container">
          <RepositoryItem {...{ ...repo, reversed: index % 2 == 0 }} />
        </div>
      ))}
    </div>
  );
}

export default RepositoryList;
