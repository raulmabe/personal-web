import React from "react";
import { Container } from "react-bootstrap";

export const Layout = (props) => (
  <div className="min-vh-85 d-flex align-items-stretch">
    <div className="w-100 d-flex flex-column">{props.children}</div>
  </div>
);
