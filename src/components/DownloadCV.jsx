import React from "react";
import { BsDownload } from "react-icons/bs";
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
        <BsDownload className="icon" />
        <span className="pl-2">Download CV</span>
      </Link>
    );
  }
}

export default DownloadCV;
