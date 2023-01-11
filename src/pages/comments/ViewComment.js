import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/ViewComment.module.css";

const ViewComment = (props) => {
  const { profile_id, profile_image, owner, updated_on, comment } = props;

  return (
    <div>
      <hr />
      <div>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <div className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_on}</span>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewComment;
