import React from "react";
import { Spinner } from "react-bootstrap";
import appStyles from "../App.module.css";
import styles from "../styles/Asset.module.css";

const Asset = ({ spinner, src, message, icon, className }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner animation="grow" className={styles.Spinner} />}
      {src && <img src={src} alt={message} className={className} />}
      {icon && <i className={`${styles.UploadIcon} ${icon} p-3 p-md-4`}></i>}
      {message && (
        <p className={`${appStyles.DarkBluishcColor} fw-bold mt-4`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Asset;
