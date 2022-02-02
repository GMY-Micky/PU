import React from "react";
import "./css/departments.css";
import { Link } from "react-router-dom";

const Departments = () => {
  return (
    <div className="departments">
      <div className="dep-title">
        <h2>DEPARTMENTS</h2>
      </div>
      <div className="dep-items">
        <Link
          to="/department-of-computer-science"
          style={{ textDecoration: "none" }}
        >
          <div className="dep-1">
            <img
              src="/assets/punjab-university-lahore-logo.png"
              alt="Punjab University Logo"
            />
            <br />
            <span className="department-name">
              Department of Computer Science
            </span>
          </div>
        </Link>
        <Link
          to="/department-of-software-engineering"
          style={{ textDecoration: "none" }}
        >
          <div className="dep-2">
            <img
              src="/assets/punjab-university-lahore-logo.png"
              alt="Punjab University Logo"
            />
            <br />
            <span className="department-name">
              Department of Software Engineering
            </span>
          </div>
        </Link>
        <Link
          to="/department-of-information-technology"
          style={{ textDecoration: "none" }}
        >
          <div className="dep-3">
            <img
              src="/assets/punjab-university-lahore-logo.png"
              alt="Punjab University Logo"
            />
            <br />
            <span className="department-name">
              Department of Information Technology
            </span>
          </div>
        </Link>
        <Link
          to="/department-of-data-science"
          style={{ textDecoration: "none" }}
        >
          <div className="dep-4">
            <img
              src="/assets/punjab-university-lahore-logo.png"
              alt="Punjab University Logo"
            />
            <br />
            <span className="department-name">Department of Data Science</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Departments;
