import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/PopularProfiles.module.css";
import Profile from "./Profile";

const PopularProfiles = ({ mobile, desktop }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });
  const { popularProfiles } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (error) {
        console.log(error);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Container
      className={`${styles.Container} ${
        mobile && "d-md-none text-center"
      } ${desktop && "d-none d-md-block"}`}
    >
      {popularProfiles.results.length ? (
        <>
          <p className="text-center">Popular profiles:</p>

          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} desktop />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;
