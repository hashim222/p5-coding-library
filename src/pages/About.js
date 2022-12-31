import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import styles from "./../styles/About.module.css";

const About = () => {
  return (
    <Row className={styles.Row}>
      <Col className={`${styles.Col} my-auto py-2 p-md-2`} md={12}>
        <Container className="p-4 text-center">
          <h1 className={styles.Header}>About Page</h1>
          <hr className={styles.AboutBorderBottom} />

          <div className={styles.AboutParagraphOne}>
            <h3>Welcome to the Coding Library website!</h3>
            <p>
              Coding library is a coding related social media website where
              users can share tips and tricks with other users including their
              experience related to the codes by making a post. They can also
              find and share information about how they started their career in
              IT, Software, and Coding. Everyone is welcome to this platform
              whether you are a newbie, intermediate or professional.
            </p>
            <h3>What to expect</h3>
            <p>
              On our platform, you can scroll down the home page to see all the
              posts created by members who have logged in. By clicking on the
              profile icon, you will be able to see all the info such as their
              bio, including the posts they own. When you have access to a
              user's profile page, you can get to know users who have the same
              interest in coding language, and you may be able to become friends
              and followers by pressing follow on their profile page. Our
              multiple features would not be available to you if you were not
              logged in, including following other users, liking their posts,
              commenting on their posts, creating a post, saving posts that
              interest you, and seeing only posts of users you follow if you are
              not logged in. So ensure that you are logged in with us!
            </p>
          </div>
        </Container>
      </Col>
    </Row>
  );
};

export default About;
