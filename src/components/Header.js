import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink exact to="/" activeClassName="active" >
        Home
      </NavLink>

      <NavLink exact to="/blogs" activeClassName="active">
        Blogs
      </NavLink>

      <NavLink exact to="/contact" activeClassName="active">
        Contact
      </NavLink>
    </header>
  );
};

export default Header;
