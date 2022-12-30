import { React, useState } from "react";
import { Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/SideNavBar.module.css";
import logo from "../assets/site-logo.png";

function ResponsiveExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mt-3">
      <div className={`${styles.NavBarMenuIcon} d-lg-none mt-2 mr-2 mr-md-3`}>
        <img
          src={logo}
          alt="site logo"
          height="45"
          className="d-lg-none ml-md-3 ml-2 mt-0.5"
        />
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
            <img src={logo} alt="site logo" height="75" />
          </div>
          <Nav.Link
            className={`${styles.NavLinkForLargerScreens} mt-5`}
            href="/home"
          >
            <i class="fa-solid fa-house"></i> Home
          </Nav.Link>
          <Nav.Link
            eventKey="link-1"
            className={styles.NavLinkForLargerScreens}
          >
            <i class="fa-solid fa-circle-info"></i> About
          </Nav.Link>
          <Nav.Link
            eventKey="link-2"
            className={styles.NavLinkForLargerScreens}
          >
            <i class="fa-solid fa-right-to-bracket"></i> Sign in
          </Nav.Link>
          <Nav.Link
            eventKey="link-3"
            className={styles.NavLinkForLargerScreens}
          >
            <i class="fa-solid fa-user-plus"></i> Sign up
          </Nav.Link>
        </Nav>
      </div>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mt-2">
            <img src={logo} alt="site logo" height="60" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-0 d-lg-none">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link
                href="/home"
                className={styles.NavLinksForSmallerScreens}
              >
                <i class="fa-solid fa-house"></i>
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                className={styles.NavLinksForSmallerScreens}
              >
                <i class="fa-solid fa-circle-info"></i>
              </Nav.Link>
              <Nav.Link
                eventKey="link-2"
                className={styles.NavLinksForSmallerScreens}
              >
                <i class="fa-solid fa-right-to-bracket"></i>
              </Nav.Link>
              <Nav.Link
                eventKey="link-3"
                className={styles.NavLinksForSmallerScreens}
              >
                <i class="fa-solid fa-user-plus"></i>
              </Nav.Link>
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ResponsiveExample;
