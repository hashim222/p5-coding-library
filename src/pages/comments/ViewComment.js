import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import DropdownToggle from "../../components/DropdownToggle";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/ViewComment.module.css";

const ViewComment = (props) => {
  const { profile_id, profile_image, owner, updated_on, comment } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <div>
      <Card className={styles.CardContainer}>
        <span className="text-right mr-4">
          {is_owner && (
            <DropdownToggle handleEdit={() => {}} handleDelete={() => {}} />
          )}
        </span>
        <Card.Body>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} className="d-inline" height={60} />

            <span className={styles.Owner}>{owner}</span>
          </Link>
          <span className={styles.CommentText}> - {comment}</span>
          <span className={styles.Date}>{updated_on}</span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewComment;
