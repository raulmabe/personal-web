import React from "react";
import marked from "marked";

function Documentation({ readme }) {
  if (!readme) return null;
  var markdown = marked(readme);

  // Quitar el primer h1
  var string = "</h1>";
  var index = markdown.indexOf(string); // Gets the first index where a space occours
  var finalHTML = markdown.substr(index + string.length);

  return (
    <div
      className="readme-box"
      dangerouslySetInnerHTML={{ __html: finalHTML }}
    ></div>
  );
}

export default Documentation;
