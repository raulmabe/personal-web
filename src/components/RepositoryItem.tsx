import React, { useState } from "react";
import Documentation from "./Documentation";
import { Row, Col, Collapse } from "react-bootstrap";
import Mock, { MockSize } from "./Mock";
import { FaGithubAlt, FaGlobe, FaDesktop, FaAppStore } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { Mabe, Project } from "../state/types";
import { format } from "date-fns";
import Tag from "./Tag";

function getUrl(mabe: Mabe): string | undefined {
  if (mabe.link_videos) {
    return mabe.link_videos[0];
  } else if (mabe.link_images) {
    return mabe.link_images instanceof Array
      ? mabe.link_images[0]
      : mabe.link_images;
  }
  return undefined;
}

function getVertical(mabe: Mabe): boolean {
  if (mabe.link_videos) {
    return mabe.vertical_videos ? mabe.vertical_videos[0] : false;
  } else {
    return mabe.vertical_images ? mabe.vertical_images[0] : false;
  }
}

function RepositoryItem(props: Project & { reversed: boolean }) {
  const { name, descriptionHTML, url, readme, mabe, reversed } = props;
  const [open, setOpen] = useState(false);

  const isCodePublic: boolean =
    !mabe.private && url != null && url.includes("github");

  const readmeExists: boolean = readme != null && readme.length > 0;

  const hasAltLink: boolean = mabe.link != null && mabe.link_text != null;

  const hasFirstButton: boolean = readmeExists;
  const hasSecondButton: boolean = hasAltLink || isCodePublic;

  mabe.platforms = mabe.platforms.map((platform) => platform.toLowerCase());
  const isForWeb: boolean = mabe.platforms.includes("web");
  const isForAndroid: boolean = mabe.platforms.includes("android");
  const isForIOS: boolean = mabe.platforms.includes("ios");
  const isForDesktop: boolean = mabe.platforms.includes("desktop");

  return (
    <div>
      <Row className="justify-content-between align-items-center">
        <Col xs="12" lg="8">
          <div className="jumbotron">
            <div className="mb-4">
              <div className="subtitle-2">
                {format(Date.parse(props.createdAt), "MMMM yyyy")}
              </div>
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
                size={MockSize.SM}
                url={getUrl(mabe)}
                isVideo={mabe.link_videos !== undefined}
                image_backup={mabe.link_images[0]}
                vertical={getVertical(mabe)}
              />
            </div>
            {isCodePublic && (
              <div>
                <hr className="my-4" />
                <Collapse in={!open} className="mb-5">
                  <div id="example-collapse-text">
                    <p>
                      {mabe.tag_tools.map((tool) => (
                        <Tag key={tool} tag={tool} />
                      ))}
                    </p>
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
                    {/* <LinkContainer to={`/project/${name}`}>
                      <Button variant="outline-secondary">{"See more"}</Button>
                    </LinkContainer> */}
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
                  <a href={mabe.link} className="btn btn-primary bg-gradient">
                    {mabe.link_text}
                  </a>
                </Col>
              )}
              {!hasAltLink && isCodePublic && (
                <Col xs="12" md="auto" className="text-center my-1 my-md-0">
                  <a href={url} className="btn btn-primary bg-gradient">
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
        <Col
          lg="4"
          className={`d-none d-lg-block ${
            reversed ? "order-first" : "order-last"
          }`}
        >
          <Mock
            size={MockSize.SM}
            url={getUrl(mabe)}
            isVideo={mabe.link_videos !== undefined}
            image_backup={mabe.link_images[0]}
            vertical={getVertical(mabe)}
          />
        </Col>
      </Row>
    </div>
  );
}

export default RepositoryItem;
