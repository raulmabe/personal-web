import React from "react";
import RepositoryItem from "../RepositoryItem";
import { Props } from "../containers/RepositoryListContainer";
import TagsHeader from "../TagsHeader";
import StatisticsHeader from "../Statistics";

function RepositoryList(props: Props) {
  return (
    <div className="flex flex-col space-y-16">
      {props.stats && <StatisticsHeader stats={props.stats} />}
      {props.filteringByTags && <TagsHeader tags={props.tags} />}
      {props.projects.map((repo, index) => (
        <div key={index.toString()}>
          <RepositoryItem {...{ ...repo, reversed: index % 2 === 0 }} />
        </div>
      ))}
    </div>
  );
}

export default RepositoryList;
