import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class DownloadCV extends React.Component {
  render() {
    return (
      <Link
        to="/assets/CVRaulMateo.pdf"
        className="text-white btn btn-primary bg-gradient"
        target="_blank"
        download
      >
        <FontAwesomeIcon icon={faDownload} size="1x" />
        <span className="pl-2">Download CV</span>
      </Link>
    );
  }
}

export default DownloadCV;
