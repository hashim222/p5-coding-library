import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { EllipsisDropdown } from "../../components/DropdownToggle";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/ViewComment.module.css";
import CommentEditForm from "./CommentEditForm";

const ViewComment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_on,
    comment,
    id,
    setComments,
    setPost,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.CardContainer}>
      {is_owner && !showEditForm && (
        <EllipsisDropdown
          handleEdit={() => setShowEditForm(true)}
          handleDelete={handleDelete}
        />
      )}
      <Card.Body>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} className="d-inline rounded-circle" height={60} />

          <span className={`${styles.Owner} ml-2`}>{owner}</span>
        </Link>
        {showEditForm ? (
          <CommentEditForm
            id={id}
            profile_id={profile_id}
            comment={comment}
            profileImage={profile_image}
            setComments={setComments}
            setShowEditForm={setShowEditForm}
          />
        ) : (
          <span className={styles.CommentText}> - {comment}</span>
        )}
        <span className={styles.Date}>{updated_on}</span>
      </Card.Body>
    </Card>
  );
};

export default ViewComment;
