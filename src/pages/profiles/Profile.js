import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Profile = (props) => {
  const { profile, desktop, mobile, imageSize = 55 } = props;
  const { id, following_id, image, owner } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <div
      className={`${desktop && "my-3 d-flex align-items-center"} ${
        mobile && "flex-column"
      }`}
    >
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div>
        <strong>{owner}</strong>
      </div>
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        {!mobile &&
          currentUser &&
          !is_owner &&
          (following_id ? (
            <Button onClick={() => {}}>unfollow</Button>
          ) : (
            <Button
              className={`${btnStyles.FormBtns} ${btnStyles.Button} ${btnStyles.BtnHover}`}
              onClick={() => {}}
            >
              follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;
