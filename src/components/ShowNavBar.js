import React from "react";
import { useGlobalContext } from "./context";
import styles from "../styles/ShowNavBar.module.css";

const Home = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <main className={styles.ContextNavBarHeight}>
      <button onClick={openSidebar} className={styles.SidebarToggle}>
        open
      </button>
    </main>
  );
};

export default Home;
