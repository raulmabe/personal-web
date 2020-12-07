import React, { useEffect } from "react";
import classNames from "classnames";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebMock from "./ui/mocks/WebMock";
import DesktopMock from "./ui/mocks/DesktopMock";
import MobileMock from "./ui/mocks/MobileMock";
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

  return <MobileMock>{children}</MobileMock>;
}

export default Mock;
