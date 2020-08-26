import React, { Component } from "react";

export class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="col-10 max-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3 text-danger">404</h1>
          <h2>page note found</h2>
          <h3>
            the requested url:{" "}
            <span className="text-danger">{this.props.location.pathname}</span>{" "}
            was not found
          </h3>
        </div>
      </div>
    );
  }
}

export default Default;
