import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

const PostsPageContent = ({ message, filter = "" }) => {
  const [posts, setPosts] = useState({ results: [] });
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPostsFromAPI = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}`);
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPostsFromAPI();
  }, [filter, pathname]);

  return (
    <Row>
      <p>Display post list here</p>
      <>
        {posts.results.length ? (
          posts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setPosts} />
          ))
        ) : (
          <Container className={appStyles.Content}>Loading........</Container>
        )}
      </>
    </Row>
  );
};

export default PostsPageContent;
