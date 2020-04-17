import React from "react";
import RepositoryItem from "../RepositoryItem";
import { Stepper, Step, StepLabel, StepContent } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import StepConnector from "@material-ui/core/StepConnector";
import { format } from "date-fns";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const StepContentStyled = withStyles({
  root: {
    borderColor: "#00747e",
  },
})(StepContent);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  circleActived: {
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundImage:
      " linear-gradient(to right top, #00bab7, #00a8aa, #00969c, #00858d, #00747e);",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {active ? (
        <div className={classes.circleActived} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

function RepositoryList({
  projects,
  activeProject,
  seeNextProject,
  seePrevProject,
  seeProject,
}) {
  return (
    <Stepper
      activeStep={activeProject}
      orientation="vertical"
      connector={<QontoConnector />}
    >
      {projects.map((repo, index) => (
        <Step key={repo.id}>
          <StepLabel
            onClick={() => seeProject(index)}
            StepIconComponent={QontoStepIcon}
          >
            <span className="pointer-on-hover step-item">
              {format(Date.parse(repo.createdAt), "MMMM yyyy")}
            </span>
          </StepLabel>
          <StepContentStyled>
            <div className="repository-container">
              <RepositoryItem {...repo} />
            </div>
            <Row className="justify-content-center">
              <Col xs="auto">
                {index > 0 && (
                  <a className="btn btn-link" onClick={seePrevProject}>
                    <FontAwesomeIcon icon={faChevronUp} size="2x" />
                  </a>
                )}
              </Col>
              <Col xs="auto">
                {index < projects.length - 1 && (
                  <a className="btn btn-link" onClick={seeNextProject}>
                    <FontAwesomeIcon icon={faChevronDown} size="2x" />
                  </a>
                )}
              </Col>
            </Row>
          </StepContentStyled>
        </Step>
      ))}
    </Stepper>
  );
}

export default RepositoryList;
