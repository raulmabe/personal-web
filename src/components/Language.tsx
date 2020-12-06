import React from "react";
import { Language } from "../state/types";
interface Props {
  lang: Language;
}

function LanguageItem(props: Props) {
  return (
    <span className="inline-block">
      <span
        className="h-2 w-2 rounded-full inline-block align-middle mr-2"
        style={{ backgroundColor: props.lang.color }}
      ></span>
      {props.lang.name}
    </span>
  );
}

export default LanguageItem;
