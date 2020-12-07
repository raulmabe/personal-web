import React from "react";

interface Props {
  children: React.ReactNode;
  classNames?: string;
}

function DesktopMock(props: Props) {
  return (
    <div className="relative rounded-xl inline-block max-w-screen-sm my-10 sm:my-0 mx-10 overflow-hidden border border-black border-opacity-5 shadow">
      <div className="absolute top-2 left-4 flex space-x-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      {props.children}
    </div>
  );
}

export default DesktopMock;
