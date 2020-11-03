import React from "react";
import RepositoryItem from "../RepositoryItem";
import { Props } from "../containers/RepositoryListContainer";
import TagsHeader from "../TagsHeader";

function RepositoryList(props: Props) {
  return (
    <div>
      <TagsHeader tags={props.tags} filtering={props.filteringByTags} />
      {props.projects.map((repo, index) => (
        <div key={index.toString()} className="repository-container">
          <RepositoryItem {...{ ...repo, reversed: index % 2 === 0 }} />
        </div>
      ))}
    </div>
  );
}

export default RepositoryList;
