import React from "react";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  vertical: boolean;
}

function MobileMock(props: Props) {
  return (
    <div
      className={classNames({
        "w-full h-full relative grid place-items-center ": true,
        "my-5 lg:my-0": props.vertical,
        "my-16 lg:my-0": !props.vertical,
      })}
    >
      <div className="absolute rounded-full bg-gradient w-80 h-80 lg:w-96 lg:h-96 " />
      <div
        className={classNames({
          "relative self-center rounded-4xl max-w-screen-sm my-10 sm:my-0 mx-10 overflow-hidden border-4 border-gray-700  shadow": true,
          "w-1/2 sm:w-1/4 md:w-2/5": props.vertical,
          "h-auto md:my-0": !props.vertical,
        })}
      >
        {props.children}
      </div>
    </div>
  );
}

export default MobileMock;
