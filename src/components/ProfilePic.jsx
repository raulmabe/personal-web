import React from "react";

function ProfilePic({ size }) {
  return size === "sm" ? (
    <div className="img-perfil">
      <img
        alt="ProfilePic"
        className={size}
        src="https://res.cloudinary.com/mabe-portfolio/image/upload/v1600530494/about_me.png"
      ></img>
    </div>
  ) : (
    <div className="img-perfil-box d-inline-block">
      <div className="img-perfil">
        <img
          alt="ProfilePic"
          className={size}
          src="https://res.cloudinary.com/mabe-portfolio/image/upload/v1600530494/about_me.png"
        ></img>
      </div>
    </div>
  );
}

export default ProfilePic;
