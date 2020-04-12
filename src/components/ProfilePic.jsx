import React from "react";
import ImgPerfil from "../assets/img/perfil.png";

function ProfilePic({ size }) {
  return size === "sm" ? (
    <div className="img-perfil">
      <img className={size} src={ImgPerfil}></img>
    </div>
  ) : (
    <div className="img-perfil-box d-inline-block">
      <div className="img-perfil">
        <img className={size} src={ImgPerfil}></img>
      </div>
    </div>
  );
}

export default ProfilePic;
