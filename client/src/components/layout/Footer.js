import React from "react";
import { Link } from "react-router-dom";

function footer() {
  return (
    <div className="footer text-center">
      <h4 className="text-center">All right reserved &copy; Deepti</h4>
      <Link to="/contact" className="text-center">
        Contact
      </Link>
      |
      <Link to="/about" className="text-center">
        About
      </Link>
      |
      <Link to="/policy" className="text-center">
        Policy
      </Link>
    </div>
  );
}

export default footer;
