import React from "react";
import marked from "marked";

function Documentation({ readme }) {
  if (!readme) return null;
  var markdown = marked(readme);
  return (
    <div
      className="readme-box"
      dangerouslySetInnerHTML={{ __html: markdown }}
    ></div>
  );
}

export default Documentation;
