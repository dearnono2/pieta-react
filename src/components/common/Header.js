import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header>
    <div className="container">
      <h1>
        <Link to="/">
          <img src={``} alt="logo" />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Pietà</Link>
          </li>
          <li>
            <Link to="/">Function</Link>
          </li>
          <li>
            <Link to="/">SRP</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
