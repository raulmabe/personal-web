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
    "mx-1 py-1 px-2 cursor-pointer rounded-lg inline-block font-medium my-1": true,
    "bg-gray-100 dark:bg-dark-darker": !isSelected,
    "bg-gradient dark:bg-dark-lighter text-white": isSelected,
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
      #{props.tag}
    </span>
  );
}

export default Tag;
