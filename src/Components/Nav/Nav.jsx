import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/LandsatImages">Landsat Images</Link>
        </li>
        <li>
          <Link to="/Mars Weather">Mars Weather</Link>
        </li>
        <li>
          <Link to="/Natural Event Tracker">Natural Event Tracker</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
