import React from "react";
import RepositoryItem from "../RepositoryItem";
import { Props } from "../containers/RepositoryListContainer";
import TagsHeader from "../TagsHeader";
import StatisticsHeader from "../Statistics";
/* import OrderingHeader from "../SortHeader";
import SortHeader from "../SortHeader"; */

function RepositoryList(props: Props) {
  return (
    <div className="flex flex-col space-y-16 items-center">
      <div className="mx-5 md:mx-20 flex flex-col space-y-8">
        {props.stats && <StatisticsHeader stats={props.stats} />}
        {/* <SortHeader /> */}
        {props.filteringByTags && <TagsHeader tags={props.tags} />}
      </div>
      <div className="max-w-screen-2xl">
        {props.projects.map((repo, index) => (
          <div key={index.toString()}>
            <RepositoryItem {...{ ...repo, reversed: index % 2 === 0 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepositoryList;
