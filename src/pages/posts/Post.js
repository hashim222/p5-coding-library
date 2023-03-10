import React from "react";
import styles from "../../styles/PostContent.module.css";
import appStyles from "../../App.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Card from "react-bootstrap/Card";
import Tooltip from "react-bootstrap/Tooltip";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { EllipsisDropdown } from "../../components/DropdownToggle";

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
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const history = useHistory();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (error) {
      // console.log(error);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (error) {
      // console.log(error);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (error) {
      // console.log(error);
    }
  };

  const handleBookmarkPosts = async () => {
    try {
      const { data } = await axiosRes.post("/bookmarks/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                bookmark_count: post.bookmark_count + 1,
                bookmark_id: data.id,
              }
            : post;
        }),
      }));
    } catch (error) {
      // console.log(error);
    }
  };

  const handleUnbookmarkPosts = async () => {
    try {
      await axiosRes.delete(`/bookmarks/${bookmark_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                bookmark_count: post.bookmark_count - 1,
                bookmark_id: null,
              }
            : post;
        }),
      }));
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body
        className="d-flex justify-content-between"
        style={{ borderBottom: "1px solid #dadadf" }}
      >
        <div>
          <Link
            to={`/profiles/${profile_id}`}
            className={appStyles.LightBluishcColor}
          >
            <Avatar src={profile_image} height={50} />
            {owner}
          </Link>
        </div>
        <div className="mt-3">
          <small>{updated_on}</small>
          {is_owner && postPage && (
            <EllipsisDropdown
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          )}
        </div>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body
        className={styles.PostInfo}
        style={{ borderTop: "1px solid #dadadf" }}
      >
        <div className={`${styles.PostIcons} text-center text-md-start`}>
          {/* Like posts */}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Your own post cannot be liked!</Tooltip>}
            >
              <i className="far fa-thumbs-up" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-thumbs-up ${styles.LikeBookmark}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-thumbs-up ${styles.LikeBookmarkOutline}`} />
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
          <Link to={`/posts/${id}`} className={appStyles.DarkBluishcColor}>
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
            <span onClick={handleUnbookmarkPosts}>
              <i className={`fas fa-star ${styles.LikeBookmark}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleBookmarkPosts}>
              <i className={`far fa-star ${styles.LikeBookmarkOutline}`} />
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
        {title && (
          <Card.Title className={styles.PostTitle}>
            {title}
            <hr className={styles.PostUnderline} />
          </Card.Title>
        )}
        {caption && <pre className={styles.PostDescription}>{caption}</pre>}
      </Card.Body>
    </Card>
  );
};

export default Post;
