import React from "react";
import { Language } from "../state/types";
interface Props {
  lang: Language;
}

function LanguageItem(props: Props) {
  return (
    <span className="d-inline-block">
      <span
        className="dot mx-2 align-middle"
        style={{ backgroundColor: props.lang.color }}
      />
      {props.lang.name}
    </span>
  );
}

export default LanguageItem;
