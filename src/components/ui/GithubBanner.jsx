import React from "react";
/* import { FaGithubAlt } from "react-icons/fa"; */
import { AiOutlineInfoCircle } from "react-icons/ai";

const GithubBanner = () => (
  <div className="fixed flex flex-row items-center right-0 bottom-0 bg-gray-100 dark:bg-dark-lighter px-2 py-3 rounded-tl-xl">
    <AiOutlineInfoCircle className="inline-block mr-2 transform scale-125" />{" "}
    fetched from Github
  </div>
);

export default GithubBanner;
