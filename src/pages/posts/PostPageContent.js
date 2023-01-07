import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom";
import Post from "./Post";

const PostPageContent = () => {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
        console.log(post);
      } catch (error) {
        console.log(error);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="mt-5">
      <Col>
        <Post {...post.results[0]} setPosts={setPost} postPage />
        <Container>Post Comments</Container>
      </Col>
    </Row>
  );
};

export default PostPageContent;
