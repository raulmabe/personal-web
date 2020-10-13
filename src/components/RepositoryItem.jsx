import React, { useState } from "react";
import Documentation from "./Documentation";
import { Row, Col, Collapse, Button } from "react-bootstrap";
import Mock from "./Mock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import Emoji from "./emoji";
import { Twemoji } from 'react-emoji-render';

function RepositoryItem(props) {
  const { name, descriptionHTML, url, readme, mabe, mocks } = props;
  const [open, setOpen] = useState(false);

  const isFromGithub = url != null && url.includes("github");
  const isPrivate = mabe.private && true;
  const readmeExists = readme != null && readme.length > 0;

  return (
    <div>
      <Row className="justify-content-between align-items-center">
        <Col xs="12" lg="8">
          <div className="jumbotron">
            <h1 className="display-4">{mabe == null ? name : mabe.title} </h1>
            <p
              className="lead"
              dangerouslySetInnerHTML={{ __html: descriptionHTML }}
            ></p>
            
            <div className="d-block d-lg-none mt-5">
              <Mock size="sm" url={mocks instanceof Array ? mocks[0]: mocks}  angle={mabe.mocks_angle && mabe.mocks_angle instanceof Array ? mabe.mocks_angle[0] : mabe.mocks_angle}/>
            </div>
            {isFromGithub && (
              <div>
                <hr className="my-4" />
                <Collapse in={!open} className="mb-5">
                  <div id="example-collapse-text">

                  {/* <Twemoji text="🛠️"/> */}
             <p>#{mabe.platforms.join(' #').toLowerCase()} #{mabe.tag_tools.join(' #')}</p>
                    <p>
                      If you are interested in this project, or just want to
                      show appreciation for my work, consider starring the
                      repository on Github!
                    </p>
                    
                  </div>
                </Collapse>
              </div>
            )}

            <Row className="justify-content-center">
              {readmeExists && (
                <Col xs="12" md="auto" className="text-center my-1 my-md-0">
                  <div>
                    <Button
                      onClick={() => setOpen(!open)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open}
                    >
                      {open ? "See less" : "See more"}
                    </Button>
                  </div>
                </Col>
              )}
              {isFromGithub && readmeExists && (
                <Col xs="12" md="auto" className="text-center my-1 my-md-0">
                  <i>- or -</i>
                </Col>
              )}
              {isFromGithub && (
                <Col xs="12" md="auto" className="text-center my-1 my-md-0">
                  <a href={url} className="btn btn-outline-light">
                    Check on <FontAwesomeIcon icon={faGithubAlt} />
                  </a>
                </Col>
              )}
            </Row>
            {readmeExists && (
              <Collapse in={open} className="mt-3">
                <div id="example-collapse-text">
                  <Documentation readme={readme} />
                </div>
              </Collapse>
            )}
          </div>
        </Col>
        <Col lg="4" className="d-none d-lg-block">
          <Mock
            size="sm"
            url={mocks instanceof Array ? mocks[0] : mocks}
            angle={mabe.mocks_angle && mabe.mocks_angle instanceof Array ? mabe.mocks_angle[0] : mabe.mocks_angle}
          />
        </Col>
      </Row>
    </div>
  );
}

export default RepositoryItem;
