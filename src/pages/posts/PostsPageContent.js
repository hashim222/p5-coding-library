import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import styles from "../../styles/PostsPageContent.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import noResults from "../../assets/results-not-found.png";
import Asset from "../../components/Asset";
import { Form, Col } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

const PostsPageContent = ({ message, filter = "" }) => {
  const [posts, setPosts] = useState({ results: [] });
  const { pathname } = useLocation();
  const [hasLoaded, setHasLoaded] = useState(false);

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPostsFromAPI = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPostsFromAPI();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, pathname, query]);

  return (
    <Row>
      <Col>
        <i className={`fas fa-search ${styles.SearchBarIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>
      </Col>
      {hasLoaded ? (
        <>
          {posts.results.length ? (
            <InfiniteScroll
              children={posts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))}
              dataLength={posts.results.length}
              loader={<Asset spinner />}
              hasMore={!!posts.next}
              next={() => {
                fetchMoreData(posts, setPosts);
              }}
            />
          ) : (
            <Container className={styles.NoResultsAndSpinnerContainer}>
              <Asset src={noResults} className="img-fluid" message={message} />
            </Container>
          )}
        </>
      ) : (
        <Container className={styles.NoResultsAndSpinnerContainer}>
          <Asset spinner />
        </Container>
      )}
    </Row>
  );
};

export default PostsPageContent;
