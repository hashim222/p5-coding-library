import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, text, height = 45, className = styles.Avatar }) => {
  return (
    <span>
      <img
        className={className}
        src={src}
        height={height}
        width={height}
        alt=""
      />
      {text}
    </span>
  );
};

export default Avatar;
