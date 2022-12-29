import React from "react";
import { useGlobalContext } from "./context";
import styles from "../styles/ShowNavBar.module.css";

const ShowNavBar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <main className={styles.ContextNavBarHeight}>
      <button onClick={openSidebar} className={`${styles.SidebarToggle} d-lg-none`}>
        open
      </button>
    </main>
  );
};

export default ShowNavBar;
