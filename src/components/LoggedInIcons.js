import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import styles from "../styles/SideNavBar.module.css";
import modalStyles from "../styles/LogoutModal.module.css";
import { NavLink, useHistory } from "react-router-dom";
import Avatar from "./Avatar";
import axios from "axios";

import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";

const LoggedInIcons = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const history = useHistory();

  const handleLogout = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const loggedInUser = (
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
        to="#"
        onClick={handleShow}
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
        to="#"
        onClick={handleShow}
        className={`${styles.NavLinksForSmallerScreens} d-lg-none`}
      >
        <i className="fa-solid fa-right-from-bracket"></i>
      </NavLink>

      <NavLink
        to={`/profiles/${currentUser?.profile_id}`}
        activeClassName={styles.ActiveSmall}
        className={`${styles.NavLinksForSmallerScreens} d-lg-none bg-white mt-4 m-3`}
        style={{ color: "#547799" }}
      >
        <Avatar
          src={currentUser?.profile_image}
          text="My Profile"
          height={80}
          alt="small avatar image"
        />
      </NavLink>

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className={modalStyles.LogoutModalHeader}>
              Logout
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={modalStyles.LogoutModalBody}>
            Are you sure you want to logout?
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              className={modalStyles.LogoutModalButton}
            >
              No
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                handleLogout();
                handleClose();
              }}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
  return loggedInUser;
};

export default LoggedInIcons;
