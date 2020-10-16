import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ProfilePic({ size }) {
  const fadeIn = (element, duration) => {
    gsap.fromTo(
      element,
      {
        y: 80,
        opacity: 0,
      },
      {
        duration: duration,
        opacity: 1,
        y: 0,
        ease: "power4.out",
        scrollTrigger: element,
      }
    );
  };

  useEffect(() => {
    fadeIn(".fadeAnimation-short", 2);
  }, []);

  return size === "sm" ? (
    <div className="img-perfil fadeAnimation-short">
      <img
        alt="ProfilePic"
        className={size}
        src="https://res.cloudinary.com/mabe-portfolio/image/upload/v1600530494/about_me.png"
      ></img>
    </div>
  ) : (
    <div className="img-perfil-box d-inline-block ">
      <div className="img-perfil fadeAnimation-short">
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
