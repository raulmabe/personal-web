import React from "react";
import Typed from "typed.js";

type TypedAboutMeProps = {
  strings: string[];
};

class TypedAboutMe extends React.Component<TypedAboutMeProps> {
  element: any;
  typed: any;

  componentDidMount() {
    const { strings } = this.props;

    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
      cursorChar: "_",
    };

    this.typed = new Typed(this.element, options);

    this.typed.start();
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="d-inline typed-wrap">
        <span
          className="text-primary display-1"
          ref={(el) => {
            this.element = el;
          }}
        ></span>
      </div>
    );
  }
}

export default TypedAboutMe;
