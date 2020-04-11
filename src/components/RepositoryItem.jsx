import React from "react";
import Documentation from "./Documentation";
import { Row, Col } from "react-bootstrap";
import Mock from "./Mock";

function RepositoryItem({ name, descriptionHTML, createdAt, url, readme }) {
  return (
    <div>
      <Row className="justify-content-between align-items-center">
        <Col xs="8">
          <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr class="my-4" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </div>
        </Col>
        <Col xs="4">
          <Mock size="sm" />
        </Col>
      </Row>
      {/*       
      <h1>
        <a href={url}>{name}</a>
      </h1>
      <div dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
      {readme != null && readme.text.length > 0 && (
        <Documentation readme={readme.text} />
      )} */}
    </div>
  );
}

export default RepositoryItem;
