import React from "react";
import { Row, Col } from "react-bootstrap";
import classNames from "classnames";

const initialState = {
  name: "",
  email: "",
  msg: "",
  formErrors: {
    name: "",
    email: "",
    msg: "",
  },
  alertInfo: "",
  alertType: "",
};

class Contact extends React.Component {
  state = initialState;

  formValid = (formErrors) => {
    let valid = true;
    let name = "";
    let email = "";
    let msg = "";

    if (!this.state.name.length > 0) {
      name = "Enter a name";
      valid = false;
    }

    if (!this.state.email.length > 0) {
      email = "Enter a email";
      valid = false;
    } else if (
      !this.state.email.includes("@") ||
      !this.state.email.includes(".")
    ) {
      email = "Email is invalid";
      valid = false;
    }

    if (!this.state.msg.length > 0) {
      msg = "Enter a message";
      valid = false;
    }

    this.setState((prevState) => ({
      ...prevState,
      formErrors: {
        name: name,
        email: email,
        msg: msg,
      },
    }));
    return valid;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.formValid(this.state.formErrors)) {
      console.log(`Submitting:
        Name: ${this.state.name}
        Email: ${this.state.email}
        Msg: ${this.state.msg}`);
      this.setState({
        ...initialState,
        alertType: "success",
        alertInfo: "Email sent! Thank you very much :)",
      });
    } else {
      this.setState((prevState) => ({
        alertType: "error",
        alertInfo: Object.values(prevState.formErrors).reduce((prev, next) => {
          return prev + (prev.length > 0 ? "<br/>" : "") + next;
        }),
      }));
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    return (
      <Row className="flex-grow-1">
        <Col className="">
          {/* <Row className="justify-content-center bg-info">
            <Col xs="auto">
              <h1>CONTACT</h1>
            </Col>
          </Row> */}
          <Row className="h-100 align-items-center justify-content-center">
            <Col xs="8" className="contact-box">
              {this.state.alertInfo.length > 0 && (
                <div
                  className={classNames("alert", {
                    "alert-primary": this.state.alertType === "success",
                    "alert-danger": this.state.alertType === "error",
                  })}
                  role="alert"
                  dangerouslySetInnerHTML={{ __html: this.state.alertInfo }}
                ></div>
              )}
              <form onSubmit={this.handleSubmit} noValidate>
                <Row>
                  <Col>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        onChange={this.handleChange}
                        value={this.state.name}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email address</label>
                      <input
                        onChange={this.handleChange}
                        value={this.state.email}
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        onChange={this.handleChange}
                        value={this.state.msg}
                        className="form-control"
                        id="msg"
                        rows="3"
                        placeholder="Enter message"
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                  <Col xs="auto">
                    <button type="submit" className="btn btn-primary px-5">
                      send
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Contact;
