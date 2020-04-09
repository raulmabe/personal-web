import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

class DownloadCV extends React.Component {
  render() {
    return (
      <Button variant="primary" className="bg-gradient">
        <FontAwesomeIcon icon={faDownload} size="1x" />
        <span className="pl-2">Download CV</span>
      </Button>
    );
  }
}

export default DownloadCV;
