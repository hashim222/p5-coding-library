import React from "react";
import { Container } from "react-bootstrap";
import { useProfileData } from "../../contexts/ProfileDataContext";
import styles from "../../styles/PopularProfiles.module.css";
import Profile from "./Profile";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";

const PopularProfiles = ({ mobile, desktop }) => {
  const { popularProfiles } = useProfileData();

  return (
    <Container
      fluid
      className={`${styles.Container} ${
        mobile && "d-md-none text-center mt-2"
      } ${desktop && "d-none d-md-block mt-md-5 mt-lg-2"}`}
    >
      {popularProfiles.results.length ? (
        <>
          <p className={`${appStyles.DarkBluishcColor} fw-bold text-center`}>
            Popular profiles:
          </p>

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
