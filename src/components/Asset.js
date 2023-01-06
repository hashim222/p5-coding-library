import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

const Asset = ({ spinner, src, message, icon }) => {
  return (
    <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner animation="grow" />}
      {src && <img src={src} alt={message} />}
      {icon && <i className={`${styles.UploadIcon} ${icon} p-3 p-md-4`}></i>}
      {message && (
        <p className={`${styles.MessageText} fw-bold mt-4`}>{message}</p>
      )}
    </div>
  );
};

export default Asset;
