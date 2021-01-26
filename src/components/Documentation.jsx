import React from "react";
import marked from "marked";

function Documentation({ readme }) {
  if (!readme) return null;
  var markdown = marked(readme);


  return (
    <div
      className="dark:bg-dark-darker bg-gray-100 rounded-3xl  px-5 md:px-10 py-5 shadow-inner readme-box"
      dangerouslySetInnerHTML={{ __html: markdown }}
    ></div>
  );
}

export default Documentation;
