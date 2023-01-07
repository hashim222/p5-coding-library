import React from "react";
import styles from "../../styles/PostContent.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    bookmark_id,
    like_id,
    likes_count,
    title,
    caption,
    image,
    updated_on,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Post}>
      <Card.Body className="d-flex justify-content-between">
        <div>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={50} />
          </Link>
        </div>
        <div className="mt-4">
          <small className="">{updated_on}</small>
          {is_owner && postPage && "[Owners edit post]"}
        </div>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body className={styles.PostInfo}>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {caption && <Card.Text>{caption}</Card.Text>}
        <div style={{ backgroundColor: "yellow" }}>
          {/* Like posts */}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Your own post cannot be liked!</Tooltip>}
            >
              <i className="far fa-thumbs-up" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={() => {}}>
              <i className={`fas fa-thumbs-up`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`far fa-thumbs-up`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Please log in to like posts!</Tooltip>}
            >
              <i className="far fa-thumbs-up" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}

          {/* bookmark posts*/}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Your own post cannot be bookmarkd!</Tooltip>}
            >
              <i className="far fa-star" />
            </OverlayTrigger>
          ) : bookmark_id ? (
            <span onClick={() => {}}>
              <i className={`fas fa-star`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`far fa-star`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Please log in to bookmark posts!</Tooltip>}
            >
              <i className="far fa-star" />
            </OverlayTrigger>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
