import React from "react";
import Tag from "./Tag";
interface Props {
  tags: string[];
  filtering: boolean;
}

function TagsHeader(props: Props) {
  return props.filtering ? (
    <div className="mx-3">
      <h5>Filtering by:</h5>
      <p>
        {props.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </p>
    </div>
  ) : (
    <div></div>
  );
}

export default TagsHeader;
