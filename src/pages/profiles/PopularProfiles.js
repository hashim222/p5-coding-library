import React from "react";
import { Container } from "react-bootstrap";
import { useProfileData } from "../../contexts/ProfileDataContext";
import styles from "../../styles/PopularProfiles.module.css";
import Profile from "./Profile";
import Asset from "../../components/Asset";

const PopularProfiles = ({ mobile, desktop }) => {
  const { popularProfiles } = useProfileData();

  return (
    <Container
      className={`${styles.Container} ${mobile && "d-md-none text-center"} ${
        desktop && "d-none d-md-block"
      }`}
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
