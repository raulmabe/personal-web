import React from "react";

interface Props {
  children: React.ReactNode;

  url: string;
}

function WebMock(props: Props) {
  return (
    <div className="rounded-xl inline-block max-w-screen-sm my-10 sm:my-0 mx-10 bg-pink-200 shadow-xl">
      <div
        className="py-2 grid items-center gap-6 px-4 rounded-t-xl sm:rounded-tr-xl bg-gray-100"
        style={{
          gridTemplateColumns: "1fr minmax(min-content, 640px) 1fr",
        }}
      >
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
        <div className="border border-black border-opacity-5 rounded-md overflow-hidden shadow-sm">
          <div className="bg-gray-50 text-sm py-1.5 text-gray-500 font-medium px-1.5 text-center">
            {props.url}
          </div>
        </div>
      </div>
      <div className="bg-white border-t border-gray-200 rounded-b-xl  overflow-hidden">
        {props.children}
      </div>
    </div>
  );
}

export default WebMock;
