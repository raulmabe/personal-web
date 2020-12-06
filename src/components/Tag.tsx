import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { ADD_TAG, REMOVE_TAG, TagsActionTypes, WebState } from "../state/types";

interface Props {
  tag: string;
}

function Tag(props: Props) {
  const isSelected: boolean = useSelector<WebState, boolean>((state) =>
    state.tagsSelected.includes(props.tag)
  );

  const tagsDispatch = useDispatch<Dispatch<TagsActionTypes>>();

  const classnames = classNames({
    "m-1 p-1 cursor-pointer rounded-lg inline-block": true,
    "bg-dark-darker": !isSelected,
    "bg-dark-lighter": isSelected,
  });
  return (
    <span
      className={classnames}
      onClick={() =>
        tagsDispatch({
          type: isSelected ? REMOVE_TAG : ADD_TAG,
          tag: props.tag,
        })
      }
    >
      <span className="text-gray-300 "># </span>
      {props.tag}
    </span>
  );
}

export default Tag;
