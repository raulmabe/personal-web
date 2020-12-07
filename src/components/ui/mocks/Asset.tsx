import React from "react";

function isVideoAvailable(isVideo: boolean): boolean {
  return isVideo ? !!document.createElement("video").canPlayType : false;
}

interface Props {
  vertical: boolean;
  url: string;
  isVideo: boolean;
  image_backup?: string;
}

function Asset(props: Props) {
  return (
    <>
      {isVideoAvailable(props.isVideo) && (
        <video playsInline autoPlay loop muted poster={props.image_backup}>
          <source src={props.url} type="video/webm" />
          {props.image_backup && (
            <img alt="MockUp" src={props.image_backup}></img>
          )}
        </video>
      )}

      {!isVideoAvailable(props.isVideo) && (
        <img alt="MockUp" src={props.url}></img>
      )}
    </>
  );
}

export default Asset;
