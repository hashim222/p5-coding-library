import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/SideNavBar.module.css";
import logo from "../assets/site-logo.png";

function ResponsiveExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mt-3 ml-2">
      <div className={styles.NavBarIcon}>
        <img
          src={logo}
          alt="site logo"
          height="45"
          className="d-lg-none ml-3 mt-n1"
        />
        <Button
          variant="primary"
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
          <Nav.Link className="mt-5" href="/home">
            <div>
              <i class="fa-solid fa-house"></i> Home
            </div>
          </Nav.Link>
          <Nav.Link eventKey="link-1">
            <div>
              <i class="fa-solid fa-circle-info"></i> About
            </div>
          </Nav.Link>
          <Nav.Link eventKey="link-2">
            <div>
              <i class="fa-solid fa-right-to-bracket"></i> Sign in
            </div>
          </Nav.Link>
          <Nav.Link eventKey="link-3">
            <div>
              <i class="fa-solid fa-user-plus"></i> Sign up
            </div>
          </Nav.Link>
        </Nav>
      </div>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="mt-2">
            <img src={logo} alt="site logo" height="45" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-0 d-lg-none">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">
                <div>
                  <i class="fa-solid fa-house"></i>
                </div>
              </Nav.Link>
              <Nav.Link eventKey="link-1">
                <div>
                  <i class="fa-solid fa-circle-info"></i>
                </div>
              </Nav.Link>
              <Nav.Link eventKey="link-2">
                <div>
                  <i class="fa-solid fa-right-to-bracket"></i>
                </div>
              </Nav.Link>
              <Nav.Link eventKey="link-3">
                <div>
                  <i class="fa-solid fa-user-plus"></i>
                </div>
              </Nav.Link>
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ResponsiveExample;
