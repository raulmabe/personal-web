import React from "react";
import SocialMedia from "./SocialMedia";

function FooterHome() {
  return (
    <div className="my-5 flex flex-col justify-center items-center space-y-4">
      <SocialMedia />
      <div className="flex flex-row justify-content-center">
        <h2 className="tracking-widest uppercase font-thin">
          software engineer
        </h2>
      </div>
    </div>
  );
}

export default FooterHome;
