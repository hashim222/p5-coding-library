import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Profile = (props) => {
  const { profile, desktop, mobile, imageSize = 55 } = props;
  const { id, image, owner } = profile;


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
    </div>
  );
};

export default Profile;
