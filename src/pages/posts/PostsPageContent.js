import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import styles from "../../styles/PostsPageContent.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import noResults from "../../assets/post-search-icon.png";
import Asset from "../../components/Asset";

const PostsPageContent = ({ message, filter = "" }) => {
  const [posts, setPosts] = useState({ results: [] });
  const { pathname } = useLocation();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchPostsFromAPI = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPostsFromAPI();
  }, [filter, pathname]);

  return (
    <Row>
      {hasLoaded ? (
        <>
          {posts.results.length ? (
            posts.results.map((post) => (
              <Post key={post.id} {...post} setPosts={setPosts} />
            ))
          ) : (
            <Container className={styles.NoResultsContainer}>
              <Asset src={noResults} message={message} />
            </Container>
          )}
        </>
      ) : (
        <Container>
          <Asset spinner />
        </Container>
      )}
    </Row>
  );
};

export default PostsPageContent;
