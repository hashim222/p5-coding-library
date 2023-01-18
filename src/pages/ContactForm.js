import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../api/axiosDefaults";
import { UseRedirect } from "../hooks/UseRedirect";

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
    <div className="text-center">
      <Form.Group>
        <Form.Label>Reason for contacting us</Form.Label>
        <Form.Control
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
        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.message?.map((message, idx) => (
        <Alert variant="danger" key={idx}>
          {message}
        </Alert>
      ))}

      <Button onClick={() => history.goBack()}>Cancel</Button>
      <Button type="submit">Send</Button>
    </div>
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Container>{textFields}</Container>
      </Form>
    </Container>
  );
};

export default ContactForm;
