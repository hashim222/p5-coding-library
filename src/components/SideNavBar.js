import { React, useState } from "react";
import { Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/SideNavBar.module.css";
import logo from "../assets/site-logo.png";
import { NavLink } from "react-router-dom";

function ResponsiveExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mt-3">
      <div className={`${styles.NavBarMenuIcon} d-lg-none mt-2 mr-2 mr-md-3`}>
        <NavLink to="/">
          <img
            src={logo}
            alt="site logo"
            height="45"
            className="d-lg-none ml-md-3 ml-2 mt-0.5"
          />
        </NavLink>
        <Button
          style={{ backgroundColor: "#49a6e9" }}
          className="d-lg-none float-end"
          onClick={handleShow}
        >
          <i class="fa-solid fa-bars"></i>
        </Button>
      </div>

      <div variant="info" className="d-none d-lg-block">
        <Nav defaultActiveKey="/home" className="flex-column">
          <div className="mt-3 ml-3">
            <NavLink to="/">
              <img src={logo} alt="site logo" height="75" />
            </NavLink>
          </div>
          <NavLink
            exact
            to="/"
            activeClassName={styles.ActiveLarge}
            className={`${styles.NavLinkForLargerScreens} mt-5`}
          >
            <i class="fa-solid fa-house"></i> Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName={styles.ActiveLarge}
            className={styles.NavLinkForLargerScreens}
          >
            <i class="fa-solid fa-circle-info"></i> About
          </NavLink>
          <NavLink
            to="/signin"
            activeClassName={styles.ActiveLarge}
            className={styles.NavLinkForLargerScreens}
          >
            <i class="fa-solid fa-right-to-bracket"></i> Sign in
          </NavLink>
          <NavLink
            to="signup"
            activeClassName={styles.ActiveLarge}
            className={styles.NavLinkForLargerScreens}
          >
            <i class="fa-solid fa-user-plus"></i> Sign up
          </NavLink>
        </Nav>
      </div>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mt-2">
            <NavLink to="/">
              <img src={logo} alt="site logo" height="60" />
            </NavLink>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-0 d-lg-none">
            <Nav defaultActiveKey="/home" className="flex-column">
              <NavLink
                exact
                to="/"
                activeClassName={styles.ActiveSmall}
                className={styles.NavLinksForSmallerScreens}
              >
                <i class="fa-solid fa-house"></i>
              </NavLink>
              <NavLink
                to="/about"
                activeClassName={styles.ActiveSmall}
                className={styles.NavLinksForSmallerScreens}
              >
                <i class="fa-solid fa-circle-info"></i>
              </NavLink>
              <NavLink
                to="/signin"
                activeClassName={styles.ActiveSmall}
                className={styles.NavLinksForSmallerScreens}
              >
                <i class="fa-solid fa-right-to-bracket"></i>
              </NavLink>
              <NavLink
                to="/signup"
                activeClassName={styles.ActiveSmall}
                className={styles.NavLinksForSmallerScreens}
              >
                <i class="fa-solid fa-user-plus"></i>
              </NavLink>
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ResponsiveExample;
