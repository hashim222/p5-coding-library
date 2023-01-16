import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Col, Row, Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { UseRedirect } from "../../hooks/UseRedirect";

const SignUpForm = () => {
  UseRedirect("loggedIn");

  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = signUpData;
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className={`${styles.Col} my-auto py-2 p-md-2`} md={12}>
        <Container className="p-4">
          <h1 className={styles.Header}>Sign Up</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={appStyles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={appStyles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="danger">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Password(again)</Form.Label>
              <Form.Control
                className={appStyles.Input}
                type="password"
                placeholder="Password(again)"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="danger">
                {message}
              </Alert>
            ))}

            <Button
              className={`${btnStyles.Button} ${btnStyles.FormBtns} ${btnStyles.BtnHover}`}
              type="submit"
            >
              Sign up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="danger" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        <Container className="mt-1">
          <Link className={appStyles.Link} to="/signin">
            Already have an account? Then please <span>Sign in</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
