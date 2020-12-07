import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { MdSort } from "react-icons/md";
import { useHistory } from "react-router-dom";
import {
  CHANGE_SORT,
  ProjectsActionTypes,
  Sort,
  WebState,
} from "../state/types";

function getSortFromString(s: string) {
  if (s === "RELEVANCE") {
    return Sort.RELEVANCE;
  } else if (s === "DATE ASC") {
    return Sort.DATE_ASC;
  } else if (s === "DATE DESC") {
    return Sort.DATE_DESC;
  }
}

function SortHeader() {
  const sort: Sort = useSelector<WebState, Sort>((state) => state.sort);
  const history = useHistory();

  const changeSort = useDispatch<Dispatch<ProjectsActionTypes>>();

  return (
    <div className="flex flex-row justify-end uppercase items-center">
      <h5 className="font-semibold flex flex-row items-center px-4 py-2 cursor-pointer">
        {" "}
        <MdSort className="mx-2" /> Sorting by
      </h5>
      <select
        className="bg-dark rounded-full focus:border-primary-blue"
        defaultValue={sort}
        onChange={(event) => {
          changeSort({
            type: CHANGE_SORT,
            sort: getSortFromString(event.target.value),
          });
          history.push("/projects");
        }}
      >
        <option value={Sort.RELEVANCE}>RELEVANCE</option>
        <option value={Sort.DATE_ASC}>DATE ASC</option>
        <option value={Sort.DATE_DESC}>DATE DESC</option>
      </select>
    </div>
  );
}

export default SortHeader;
