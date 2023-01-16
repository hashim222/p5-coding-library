import React from "react";
import NoResultsFound from "../assets/page-not-found.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

const NotFound = () => {
  return (
    <div className={`${styles.NotFound} mt-2 mt-md-5`}>
      <Asset
        src={NoResultsFound}
        className="img-fluid"
        message={`Sorry, the page you're looking for doesn't exist`}
      />
    </div>
  );
};

export default NotFound;
