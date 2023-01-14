import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePageContent.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom";
import { fetchMoreData } from "../../utils/utils";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { axiosReq } from "../../api/axiosDefaults";
import { Button, Image } from "react-bootstrap";
import Post from "../posts/Post";
import noResults from "../../assets/results-not-found.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { ProfileEditDropdown } from "../../components/DropdownToggle";

const ProfilePageContent = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { pageProfile } = useProfileData();
  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePosts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/posts/?owner__profile=${id}`),
          ]);

        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(profilePosts);
        setHasLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row className="px-3 text-center">
        <Col lg={3}>
          <Image
            src={profile?.image}
            className={styles.ProfileImage}
            roundedCircle
          />
        </Col>

        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.posts_count}</div>
              <div>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>followings</div>
            </Col>
          </Row>
        </Col>

        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                onClick={() => handleUnfollow(profile)}
                className={`${btnStyles.FormBtns} ${btnStyles.Button} ${btnStyles.BtnHover}`}
              >
                Unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${styles.FollowBtns}`}
                onClick={() => handleFollow(profile)}
              >
                Follow
              </Button>
            ))}
        </Col>

        {profile && (
          <Col className="p-3">
            <div className={styles.UserProfileDetail}>
              <span>Name:</span>
              {profile.name ? profile?.name : <i className="fa-solid fa-ban" />}
            </div>
            <div className={styles.UserProfileDetail}>
              <span>Coding experience:</span>
              {profile.years_of_experience === "" ? (
                <i className="fa-solid fa-ban" />
              ) : (
                profile?.years_of_experience
              )}
            </div>
            <div className={styles.UserProfileDetail}>
              <span>Favourite programming language:</span>
              {profile.favourite_programming_language === "" ? (
                <i className="fa-solid fa-ban" />
              ) : (
                profile?.favourite_programming_language
              )}
            </div>
            <div className={styles.UserProfileDetail}>
              <span>About me:</span>
              {profile.about_me ? (
                profile?.about_me
              ) : (
                <i className="fa-solid fa-ban" />
              )}
            </div>
          </Col>
        )}
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s posts</p>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={noResults}
          message={`No results were found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  return (
    <Row className={styles.Container}>
      <Col className="py-2 p-0 p-lg-2">
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
    </Row>
  );
};

export default ProfilePageContent;
