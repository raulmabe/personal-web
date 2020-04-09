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
      typeSpeed: 25,
      backSpeed: 50,
    };

    this.typed = new Typed(this.element, options);

    this.typed.start();
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="typed-wrap">
        <span
          ref={(el) => {
            this.element = el;
          }}
        ></span>
      </div>
    );
  }
}

export default TypedAboutMe;
