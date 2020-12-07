import React from "react";

interface Props {
  children: React.ReactNode;
  classNames?: string;
}

function MobileMock(props: Props) {
  return (
    <div className="w-full h-full relative grid place-items-center my-5 md:my-0">
      <div className="absolute rounded-full bg-gradient w-80 h-80 lg:w-96 lg:h-96 " />
      <div className="relative w-1/2 sm:w-1/4 md:w-2/5 self-center rounded-4xl max-w-screen-sm my-10 sm:my-0 mx-10 overflow-hidden border-4 border-gray-700  shadow">
        {props.children}
      </div>
    </div>
  );
}

export default MobileMock;
