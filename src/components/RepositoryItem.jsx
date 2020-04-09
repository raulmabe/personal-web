import React from "react";
import Documentation from "./Documentation";

function RepositoryItem({ name, descriptionHTML, createdAt, url, readme }) {
  return (
    <div>
      <h1>
        <a href={url}>{name}</a>
      </h1>
      <div dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
      {readme != null && readme.text.length > 0 && (
        <Documentation readme={readme.text} />
      )}
    </div>
  );
}

export default RepositoryItem;
