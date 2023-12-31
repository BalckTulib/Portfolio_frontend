// Nav.js
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Nav() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsNavCollapsed(true);
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container-fluid">
        <NavLink exact to="/" className="nav-link goto-home nav-menu-item">
          <i className="ion-home text-dark" style={{ color: "#ebe5e5" }}></i>
        </NavLink>
        <button
          type="button"
          className={`navbar-toggler ${isNavCollapsed ? "collapsed" : ""}`}
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded={!isNavCollapsed}
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`} id="navbarCollapse">
          <div className="navbar-nav w-100">
            <ul className="nav-menu list-unstyled mb-0 list-inline">
              <li className="list-inline-item m-0">
                <NavLink
                  to="/Formations"
                  className="display-centery px-4 nav-item nav-link nav-menu-item"
                  activeClassName="nav-menu-active"
                >
                  Formations
                </NavLink>
              </li>
              <li className="list-inline-item m-0">
                <NavLink
                  to="/Experiences"
                  className="display-centery px-4 nav-item nav-link nav-menu-item"
                  activeClassName="nav-menu-active"
                >
                  Experiences
                </NavLink>
              </li>
              <li className="list-inline-item m-0">
                <NavLink
                  to="/Projects"
                  className="display-centery px-4 nav-item nav-link nav-menu-item"
                  activeClassName="nav-menu-active"
                >
                  Projects
                </NavLink>
              </li>
              <li className="list-inline-item m-0">
                <NavLink
                  to="/Skills"
                  className="display-centery px-4 nav-item nav-link nav-menu-item"
                  activeClassName="nav-menu-active"
                >
                  Skills
                </NavLink>
              </li>
              
            </ul>
            <hr className="d-lg-none" />
            <div className="social-menu form-inline ml-auto">
              <ul className="list-unstyled mb-0 list-inline social-icons">
                <li className="list-inline-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/BalckTulib"
                  >
                    <i className="ion-social-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
