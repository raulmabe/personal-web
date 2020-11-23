import React from "react";
import { Statistics } from "../state/types";
import LanguageItem from "./Language";
interface Props {
  stats: Statistics;
}

function StatisticsHeader(props: Props) {
  return (
    <div className="statistics px-5 py-3">
      <p>
        <span className="text-uppercase  text-muted">Lately using</span>
        {props.stats.lately.map((language) => (
          <LanguageItem key={language.name} lang={language} />
        ))}
      </p>
      <p>
        <span className="text-uppercase  text-muted">Summary</span>
        {props.stats.ever
          .filter(
            (tuple) =>
              tuple[1].name !== "HTML" &&
              tuple[1].name !== "CSS" &&
              tuple[1].name !== "Objective-C" &&
              tuple[1].name !== "Swift" &&
              tuple[1].name !== "Kotlin" &&
              tuple[1].name !== "Makefile" &&
              tuple[1].name !== "CoffeeScript"
          )
          .sort((tupleA, tupleB) => {
            return tupleA[0] > tupleB[0] ? -1 : 1;
          })
          .map((tuple) => (
            <div className="d-inline">
              <LanguageItem key={tuple[1].name} lang={tuple[1]} /> on{" "}
              {`${tuple[0]} ${tuple[0] > 1 ? "projects" : "project"}`}
            </div>
          ))}
      </p>
    </div>
  );
}

export default StatisticsHeader;
