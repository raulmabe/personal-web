import React from "react";
import Tag from "./Tag";
interface Props {
  tags: string[];
}

function TagsHeader(props: Props) {
  return (
    <div>
      <h5 className="font-semibold">Filtering by:</h5>
      <p>
        {props.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </p>
    </div>
  );
}

export default TagsHeader;
