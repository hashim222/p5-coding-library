import React from "react";
import styles from "../styles/SideNavBar.module.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { NavLink } from "react-router-dom";

const LoggedOutIcons = () => {
  const loggedOutUser = (
    <>
      {/* loggedOutIcons for larger devices */}
      <NavLink
        to="/signin"
        activeClassName={styles.ActiveLarge}
        className={`${styles.NavLinkForLargerScreens} d-none d-lg-block`}
      >
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Sign in</Tooltip>}>
          <span>
            <i className="fa-solid fa-right-to-bracket"></i> Sign in
          </span>
        </OverlayTrigger>
      </NavLink>

      <NavLink
        to="/signup"
        activeClassName={styles.ActiveLarge}
        className={`${styles.NavLinkForLargerScreens} d-none d-lg-block`}
      >
        <OverlayTrigger placement="bottom" overlay={<Tooltip>Sign up</Tooltip>}>
          <span>
            <i className="fa-solid fa-user-plus"></i> Sign up
          </span>
        </OverlayTrigger>
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
  return loggedOutUser;
};

export default LoggedOutIcons;
