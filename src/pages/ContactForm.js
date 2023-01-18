import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import btnStyles from "../styles/Button.module.css";
import appStyles from "../App.module.css";
import styles from "../styles/ContactForm.module.css";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../api/axiosDefaults";
import { UseRedirect } from "../hooks/UseRedirect";
import { Container } from "react-bootstrap";

const ContactForm = () => {
  UseRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const [contactData, setContactData] = useState({
    reason: "",
    content: "",
  });
  const { reason, content } = contactData;

  const history = useHistory();

  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("add_reason", reason);
    formData.append("message", content);

    try {
      await axiosReq.post("/contact_form/", formData);
      history.push("/thank_you");
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center pt-0 pt-lg-4">
      <Form.Group>
        <Form.Label className={appStyles.DarkBluishcColor}>
          Add a reason
        </Form.Label>
        <Form.Control
          className={appStyles.Input}
          type="text"
          name="reason"
          value={reason}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.add_reason?.map((message, idx) => (
        <Alert variant="danger" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label className={appStyles.DarkBluishcColor}>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          className={appStyles.Input}
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.message?.map((message, idx) => (
        <Alert variant="danger" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.FormBtns} ${btnStyles.Button} ${btnStyles.BtnHover} mt-3 mb-0`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.FormBtns} ${btnStyles.Button} ${btnStyles.BtnHover} mt-3 mb-0`}
        type="submit"
      >
        Send
      </Button>
    </div>
  );

  return (
    <Form className="mt-2 mt-md-5" onSubmit={handleSubmit}>
      <Container
        className={`${styles.Container} d-flex flex-column justify-content-center pb-3 pt-2`}
      >
        <h1 className={styles.HeaderText}>Get In Touch With Us</h1>
        <hr className={styles.BorderBottom} />
        <div>{textFields}</div>
      </Container>
    </Form>
  );
};

export default ContactForm;
