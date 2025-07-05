import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Restaurante La Comarca</h1>
      <nav>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/contact">Contact</Link>
        </span>
        <span>
          <Link to="/reserve">Reserve</Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
