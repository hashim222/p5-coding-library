import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Col, Row, Container, Form, Button } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className={`${styles.Col} my-auto py-2 p-md-2`} md={12}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Sign Up</h1>

          <Form>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
              />
            </Form.Group>

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
              />
            </Form.Group>

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Password(again)</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password(again)"
                name="password2"
              />
            </Form.Group>

            <Button
              className={`${btnStyles.Button} ${btnStyles.SubmitBtnBg}`}
              type="submit"
            >
              Sign up
            </Button>
          </Form>
        </Container>
        <Container className="mt-3">
          <Link className={styles.Link} to="/signin">
            Already have an account? Then please <span>Sign in</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
