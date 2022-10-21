import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/contact">Documentation</Link>
        </li>
        <li>
          <Link to="/staking">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;