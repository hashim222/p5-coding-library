import { React, useState } from "react";
import { Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import styles from "../styles/SideNavBar.module.css";
import logo from "../assets/site-logo.png";
import { NavLink } from "react-router-dom";
import UseClickOutsideToggle from "../hooks/UseClickOutsideToggle";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";

const SideNavBar = () => {
  const currentUser = useCurrentUser();
  const loggedInIcons = (
    <>
      {/* loggedInIcons for larger devices */}
      <NavLink
        to="/posts/create_topic"
        activeClassName={styles.ActiveLarge}
        className={`${styles.NavLinkForLargerScreens} d-none d-lg-block`}
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Create Topic</Tooltip>}
        >
          <span>
            <i className="fa-solid fa-square-plus"></i> Create
          </span>
        </OverlayTrigger>
      </NavLink>

      <NavLink
        to="/followings_feed"
        activeClassName={styles.ActiveLarge}
        className={`${styles.NavLinkForLargerScreens} d-none d-lg-block`}
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Followings Feed</Tooltip>}
        >
          <span>
            <i className="fa-solid fa-square-rss"></i> Feeds
          </span>
        </OverlayTrigger>
      </NavLink>

      <NavLink
        to="/bookmarked_topics"
        activeClassName={styles.ActiveLarge}
        className={`${styles.NavLinkForLargerScreens} d-none d-lg-block`}
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Bookmarked Topics</Tooltip>}
        >
          <span>
            <i className="fa-solid fa-star"></i> Bookmarked
          </span>
        </OverlayTrigger>
      </NavLink>

      <NavLink
        to="/logout"
        activeClassName={styles.ActiveLarge}
        className={`${styles.NavLinkForLargerScreens} d-none d-lg-block`}
      >
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Logout</Tooltip>}>
          <span>
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </span>
        </OverlayTrigger>
      </NavLink>

      <hr className="mt-4 d-none d-lg-block" />

      <NavLink
        to={`/profiles/${currentUser?.profile_id}`}
        activeClassName={styles.ActiveLarge}
        className={`${styles.NavLinkForLargerScreens} mt-0 d-none d-lg-block`}
      >
        <Avatar
          src={currentUser?.profile_image}
          height={60}
          alt="large avatar image"
        />
      </NavLink>

      {/* loggedInIcons for smaller devices */}
      <NavLink
        to="/posts/create_topic"
        activeClassName={styles.ActiveSmall}
        className={`${styles.NavLinksForSmallerScreens} d-lg-none`}
      >
        <i className="fa-solid fa-square-plus"></i>
      </NavLink>

      <NavLink
        to="/followings_feed"
        activeClassName={styles.ActiveSmall}
        className={`${styles.NavLinksForSmallerScreens} d-lg-none`}
      >
        <i className="fa-solid fa-square-rss"></i>
      </NavLink>

      <NavLink
        to="/bookmarked_topics"
        activeClassName={styles.ActiveSmall}
        className={`${styles.NavLinksForSmallerScreens} d-lg-none`}
      >
        <i className="fa-solid fa-star"></i>
      </NavLink>

      <NavLink
        to="/logout"
        activeClassName={styles.ActiveSmall}
        className={`${styles.NavLinksForSmallerScreens} d-lg-none`}
      >
        <i className="fa-solid fa-right-from-bracket"></i>
      </NavLink>

      <NavLink
        to={`/profiles/${currentUser?.profile_id}`}
        // activeClassName={styles.ActiveSmall}
        className={`${styles.NavLinksForSmallerScreens} d-lg-none`}
      >
        <Avatar
          src={currentUser?.profile_image}
          text="My Profile"
          height={80}
          alt="small avatar image"
        />
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      {/* loggedOutIcons for larger devices */}
      <NavLink
        to="/signin"
        activeClassName={styles.ActiveLarge}
        className={`${styles.NavLinkForLargerScreens} d-none d-lg-block`}
      >
        <i className="fa-solid fa-right-to-bracket"></i> Sign in
      </NavLink>

      <NavLink
        to="signup"
        activeClassName={styles.ActiveLarge}
        className={`${styles.NavLinkForLargerScreens} d-none d-lg-block`}
      >
        <i className="fa-solid fa-user-plus"></i> Sign up
      </NavLink>

      {/* loggedOutIcons for smaller devices */}
      <NavLink
        to="/signin"
        activeClassName={styles.ActiveSmall}
        className={`${styles.NavLinksForSmallerScreens} d-lg-none`}
      >
        <i className="fa-solid fa-right-to-bracket"></i>
      </NavLink>

      <NavLink
        to="/signup"
        activeClassName={styles.ActiveSmall}
        className={`${styles.NavLinksForSmallerScreens} d-lg-none`}
      >
        <i className="fa-solid fa-user-plus"></i>
      </NavLink>
    </>
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { expanded, setExpanded, ref } = UseClickOutsideToggle();

  return (
    <div className="mt-3">
      {/* Toggle side navbar */}
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
          className="d-lg-none float-end rounded-4"
          ref={ref}
          onClick={() => {
            handleShow();
            setExpanded(!expanded);
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </Button>
      </div>

      {/* Side Navbar for larger devices */}
      <div variant="info" className="d-none d-lg-block">
        <Nav className="flex-column">
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
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Home</Tooltip>}
            >
              <span>
                <i className="fa-solid fa-house"></i> Home
              </span>
            </OverlayTrigger>
          </NavLink>

          <NavLink
            to="/about"
            activeClassName={styles.ActiveLarge}
            className={styles.NavLinkForLargerScreens}
          >
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>About</Tooltip>}
            >
              <span>
                <i className="fa-solid fa-circle-info"></i> About Us
              </span>
            </OverlayTrigger>
          </NavLink>

          {currentUser ? loggedInIcons : loggedOutIcons}
        </Nav>
      </div>

      {/* Side Navbar for smaller devices */}
      <Offcanvas show={(show, expanded)} onHide={handleClose} responsive="lg">
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
                <i className="fa-solid fa-house"></i>
              </NavLink>

              <NavLink
                to="/about"
                activeClassName={styles.ActiveSmall}
                className={styles.NavLinksForSmallerScreens}
              >
                <i className="fa-solid fa-circle-info"></i>
              </NavLink>

              {currentUser ? loggedInIcons : loggedOutIcons}
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SideNavBar;
