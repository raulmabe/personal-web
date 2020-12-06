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

  return (
    <div
      className={`relative -left-20 top-20 inline-block h-48 w-48 overflow-visible ${
        size !== "sm" ? "bg-gradient" : ""
      } rounded-full`}
    >
      <img
        alt="ProfilePic"
        className="absolute -top-24 left-24 rounded-full h-48 w-48 transform scale-125 fadeAnimation-short border-8 border-dark object-cover"
        src="https://res.cloudinary.com/mabe-portfolio/image/upload/e_grayscale/v1606476582/temp/Sin_nombre_zqbdvq.png"
      />
    </div>
  );
}

export default ProfilePic;
