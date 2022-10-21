import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.scss";

class BlogApp extends React.Component {
  render() {
    return (
      <div className="container my-5">
        <div className="card">
          <div className="card-header"></div>
          <div className="card-body"></div>
          <div className="card-footer"></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BlogApp />, document.getElementById("root"));
