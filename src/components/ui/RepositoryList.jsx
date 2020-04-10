import React from "react";
import RepositoryItem from "../RepositoryItem";
import { Stepper, Step, StepLabel, StepContent } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import StepConnector from "@material-ui/core/StepConnector";
import { format } from "date-fns";
import { Button, Row, Col } from "react-bootstrap";

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
}) {
  return (
    <Stepper
      activeStep={activeProject}
      orientation="vertical"
      connector={<QontoConnector />}
    >
      {projects.map((repo) => (
        <Step key={repo.id}>
          <StepLabel StepIconComponent={QontoStepIcon}>
            {format(Date.parse(repo.createdAt), "MMMM yyyy")}
          </StepLabel>
          <StepContentStyled>
            <div className="repository-container">
              <RepositoryItem {...repo} />
            </div>
            <Row className="justify-content-between">
              <Col xs="auto">
                <Button variant="outline-secondary" onClick={seePrevProject}>
                  Back
                </Button>
              </Col>
              <Col xs="auto">
                <Button variant="outline-secondary" onClick={seeNextProject}>
                  Next
                </Button>
              </Col>
            </Row>
          </StepContentStyled>
        </Step>
      ))}
    </Stepper>
  );
}

export default RepositoryList;
