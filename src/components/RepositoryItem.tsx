import React, { useState } from "react";
import Documentation from "./Documentation";
import { Row, Col, Collapse, Button } from "react-bootstrap";
import Mock from "./Mock";
import { FaGithubAlt, FaGlobe, FaDesktop, FaAppStore } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { Project } from "../state/types";

function RepositoryItem(props: Project) {
  const { name, descriptionHTML, url, readme, mabe, mocks } = props;
  const [open, setOpen] = useState(false);

  const isCodePublic = !mabe.private && url != null && url.includes("github");

  const readmeExists = readme != null && readme.length > 0;

  const hasAltLink = mabe.link != null && mabe.link_text != null;

  const hasFirstButton = readmeExists;
  const hasSecondButton = hasAltLink || isCodePublic;

  mabe.platforms = mabe.platforms.map((platform) => platform.toLowerCase());
  const isForWeb = mabe.platforms.includes("web");
  const isForAndroid = mabe.platforms.includes("android");
  const isForIOS = mabe.platforms.includes("ios");
  const isForDesktop = mabe.platforms.includes("desktop");

  return (
    <div>
      <Row className="justify-content-between align-items-center">
        <Col xs="12" lg="8">
          <div className="jumbotron">
            <div className="mb-4">
              <h1 className="display-4">{mabe == null ? name : mabe.title} </h1>
              {isForWeb && (
                <FaGlobe className="icon-2x align-text-bottom mx-1" />
              )}
              {isForAndroid && (
                <DiAndroid className="icon-2x align-text-bottom mx-1" />
              )}
              {isForIOS && (
                <FaAppStore className="icon-2x align-text-bottom mx-1" />
              )}
              {isForDesktop && (
                <FaDesktop className="icon-2x align-text-bottom mx-1" />
              )}
            </div>

            <p
              className="lead"
              dangerouslySetInnerHTML={{ __html: descriptionHTML }}
            ></p>

            <div className="d-block d-lg-none mt-5">
              <Mock
                size="sm"
                url={mocks instanceof Array ? mocks[0] : mocks}
                angle={
                  mabe.mocks_angle && mabe.mocks_angle instanceof Array
                    ? mabe.mocks_angle[0]
                    : mabe.mocks_angle
                }
              />
            </div>
            {isCodePublic && (
              <div>
                <hr className="my-4" />
                <Collapse in={!open} className="mb-5">
                  <div id="example-collapse-text">
                    <p>#{mabe.tag_tools.join(" #")}</p>
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
              {hasFirstButton && (
                <Col xs="12" md="auto" className="text-center my-1 my-md-0">
                  <div>
                    <a
                      onClick={() => setOpen(!open)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open}
                      className="btn btn-outline-light"
                    >
                      {open ? "See less" : "See more"}
                    </a>
                  </div>
                </Col>
              )}
              {hasSecondButton && hasFirstButton && (
                <Col xs="12" md="auto" className="text-center my-1 my-md-0">
                  <i>- or -</i>
                </Col>
              )}
              {hasAltLink && (
                <Col xs="12" md="auto" className="text-center my-1 my-md-0">
                  <a href={mabe.link} className="btn btn-primary">
                    {mabe.link_text}
                  </a>
                </Col>
              )}
              {!hasAltLink && isCodePublic && (
                <Col xs="12" md="auto" className="text-center my-1 my-md-0">
                  <a href={url} className="btn btn-primary">
                    Check on <FaGithubAlt className="icon" />
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
            angle={
              mabe.mocks_angle && mabe.mocks_angle instanceof Array
                ? mabe.mocks_angle[0]
                : mabe.mocks_angle
            }
          />
        </Col>
      </Row>
    </div>
  );
}

export default RepositoryItem;
