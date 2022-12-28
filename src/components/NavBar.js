import React from "react";
import { Nav } from "react-bootstrap";
import styles from "../styles/SideNavBar.module.css";

const SideNavBar = () => {
  return (
    <div className={`${styles.SideNavbarHeight}`}>
      <div className={styles.SiteLogo}>Logo</div>
      <Nav defaultActiveKey="/home" className={`${styles.NavLinkHeader} flex-column`}>
        <Nav.Link href="/home">
          <div>Home</div>
        </Nav.Link>
        <Nav.Link eventKey="link-1">
          <div>About</div>
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          <div>Sign in</div>
        </Nav.Link>
        <Nav.Link eventKey="link-3">
          <div>Sign up</div>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SideNavBar;
