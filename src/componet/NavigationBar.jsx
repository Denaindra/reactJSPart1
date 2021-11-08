import React from "react";

const NavigationBar = (props) => {   //stateless function
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar {props.Total}
      </a>
    </nav>
  );
};
export default NavigationBar;
