import React from "react";
import { FaGithubAlt, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="flex flex-row justify-center space-x-2">
      <a
        rel="noopener noreferrer"
        href="https://github.com/raulmabe"
        target="_blank"
      >
        <FaGithubAlt className="text-3xl md:text-4xl" />
      </a>
      <a
        rel="noopener noreferrer"
        href="https://twitter.com/raul_mabe"
        target="_blank"
      >
        <FaTwitter className="text-3xl md:text-4xl" />
      </a>
      <a
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/raul-mateo-beneyto-0b2204187/"
        target="_blank"
      >
        <FaLinkedinIn className="text-3xl md:text-4xl" />
      </a>
    </div>
  );
}

export default SocialMedia;
