import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { format } from "date-fns";
import TypedAboutMe from "../components/TypedAboutMe";

function NotFound(props) {
  console.log(props);
  let location = props.history.location.state.urlAccessed;
  return (
    <Row className="container h-75 align-items-center">
      <Col className="terminal-font">
        <span className="bash-prompt">bash-4.2</span>$ curl www.raulmabe.dev
        {location} -I
        <br />
        HTTP/1.1 404 Not Found
        <br /> date: {format(Date.now(), "eee, dd MMMM yyyy ppp")}
        <br />
        server: *****
        <br />
        transfer-encoding: chunked
        <br />
        <span className="bash-prompt">bash-4.2</span>${" "}
        <TypedAboutMe strings={["", ""]} />
      </Col>
    </Row>
  );
}

export default NotFound;
