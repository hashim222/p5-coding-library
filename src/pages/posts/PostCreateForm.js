import React, { useRef, useState } from "react";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import textStyle from "../../styles/Asset.module.css";
import Asset from "../../components/Asset";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

function PostCreateForm() {
  const [errors, setErrors] = useState({});
  const imageInput = useRef(null);

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
  });
  const { title, content, image } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label className={textStyle.MessageText}>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          className={styles.Input}
          value={title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label className={textStyle.MessageText}>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          className={styles.Input}
          value={content}
          onChange={handleChange}
        />
      </Form.Group>

      <Button
        className={`${btnStyles.FormBtns} ${btnStyles.Button} mt-3 mt-md-4`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button
        className={`${btnStyles.FormBtns} ${btnStyles.Button} mt-3 mt-md-4`}
        type="submit"
      >
        create
      </Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${styles.Container} d-flex flex-column justify-content-center pb-3 pb-lg-0`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.BtnHover}`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    icon="fa-solid fa-upload"
                    message="Upload an image for the post"
                  />
                </Form.Label>
              )}
              <Form.Control
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col
          md={5}
          lg={4}
          className="d-none d-md-block p-0 pt-md-2 pb-md-2 pl-md-0 mr-md-0"
        >
          <Container className={styles.Container}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
