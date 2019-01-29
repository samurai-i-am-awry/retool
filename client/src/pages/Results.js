import React, { Component } from "react";
import NavWithSidebar from "../components/NavWithSidebar";

class Results extends Component {
  render() {
    return (
      <div>
        <NavWithSidebar
          key="results"
          current="results"
          tool={this.props.match.params.query}
        />
      </div>
    );
  }
}

export default Results;
