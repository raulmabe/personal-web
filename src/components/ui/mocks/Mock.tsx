import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebMock from "./WebMock";
import DesktopMock from "./DesktopMock";
import MobileMock from "./MobileMock";
gsap.registerPlugin(ScrollTrigger);

export enum MockType {
  MOBILE_X,
  MOBILE_Y,
  WEB,
  DESKTOP,
}

interface Props {
  type: MockType;
  urlMock?: string;
  children?: React.ReactNode;
}

function Mock(props: Props) {
  const { type, children } = props;

  if (type === MockType.WEB) {
    return <WebMock url={props.urlMock}>{children}</WebMock>;
  }

  if (type === MockType.DESKTOP) {
    return <DesktopMock>{children}</DesktopMock>;
  }

  return (
    <MobileMock vertical={type === MockType.MOBILE_Y}>{children}</MobileMock>
  );
}

export default Mock;
