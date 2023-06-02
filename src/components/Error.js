import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="section section-center">
      <h3>Sorry, there was an error</h3>
      <Link to="/" className="btn"></Link>
    </div>
  );
};

export default Error;
