import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => (
  <header>
    <div className="container">
      <h1>
        <Link to="/">
          <img src={"./images/logo_black.png"} alt="logo" />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/Pieta">Pietà</Link>
          </li>
          <li>
            <Link to="/Function">Function</Link>
          </li>
          <li>
            <Link to="/SubSrp">SRP</Link>
          </li>
        </ul>
      </nav>
      <div class="util">
        <ul>
          <li>White Paper</li>
          <li>Channel</li>
          <li>Language</li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
