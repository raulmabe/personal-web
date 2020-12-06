import React, { useEffect } from "react";
import classNames from "classnames";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebMock from "./ui/mocks/WebMock";
import DesktopMock from "./ui/mocks/DesktopMock";
gsap.registerPlugin(ScrollTrigger);

export enum MockSize {
  SM = "sm",
  LG = "lg",
}

interface Props {
  size: MockSize;
  vertical: boolean;
  urlImage: string;
  urlMock?: string;
  isVideo: boolean;
  image_backup?: string;
  isWeb: boolean;
  isDesktop: boolean;
}

function isVideoAvailable(isVideo: boolean): boolean {
  return isVideo ? !!document.createElement("video").canPlayType : false;
}

function Mock(props: Props) {
  const {
    size,
    vertical,
    urlImage,
    isVideo,
    image_backup,
    isWeb,
    isDesktop,
  } = props;

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
        y: vertical ? -100 : 0,
        ease: "power4.out",
        scrollTrigger: element,
      }
    );
  };

  const mockClasses = classNames({
    "bg-gradient rounded-full flex flex-row justify-center items-start": true,
    "h-96 w-96": size === MockSize.LG,
    "h-72 w-72": size === MockSize.SM,
    "my-16": vertical && size === MockSize.SM,
    "my-8": !vertical && size === MockSize.SM,
    "my-32": vertical && size === MockSize.LG,
  });

  const imageClasses = classNames({
    "fadeAnimation-short": true,
    "w-52 transform -translate-y-10": vertical && size === MockSize.SM,
    "w-72 transform -translate-y-32": vertical && size === MockSize.LG,
    "transform scale-125 translate-y-10": !vertical && size === MockSize.SM,
    "h-72": !vertical && size === MockSize.LG,
  });

  if (isWeb) {
    return (
      <WebMock url={props.urlMock}>
        {isVideoAvailable(isVideo) && (
          <video playsInline autoPlay loop muted poster={image_backup}>
            <source src={urlImage} type="video/webm" />
            {image_backup && <img alt="MockUp" src={image_backup}></img>}
          </video>
        )}

        {!isVideoAvailable(isVideo) && <img alt="MockUp" src={urlImage}></img>}
      </WebMock>
    );
  }

  if (isDesktop) {
    return (
      <DesktopMock>
        {isVideoAvailable(isVideo) && (
          <video playsInline autoPlay loop muted poster={image_backup}>
            <source src={urlImage} type="video/webm" />
            {image_backup && <img alt="MockUp" src={image_backup}></img>}
          </video>
        )}

        {!isVideoAvailable(isVideo) && <img alt="MockUp" src={urlImage}></img>}
      </DesktopMock>
    );
  }

  return (
    <div className={mockClasses}>
      {isVideoAvailable(isVideo) && (
        <video
          playsInline
          autoPlay
          loop
          muted
          className={imageClasses}
          poster={image_backup}
        >
          <source src={urlImage} type="video/webm" />
          {image_backup && (
            <img alt="MockUp" src={image_backup} className={imageClasses}></img>
          )}
        </video>
      )}
      {!isVideoAvailable(isVideo) && (
        <img alt="MockUp" src={urlImage} className={imageClasses}></img>
      )}
    </div>
  );
}

export default Mock;
