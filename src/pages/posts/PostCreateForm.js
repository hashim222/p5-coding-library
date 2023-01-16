import React, { useRef, useState } from "react";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Alert,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { UseRedirect } from "../../hooks/UseRedirect";

const PostCreateForm = () => {
  UseRedirect("loggedOut");

  const [errors, setErrors] = useState({});
  const imageInput = useRef(null);
  const history = useHistory();

  const [postData, setPostData] = useState({
    title: "",
    caption: "",
    image: "",
  });
  const { title, caption, image } = postData;

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("caption", caption);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center pt-0 pt-lg-4">
      <Form.Group>
        <Form.Label className={appStyles.DarkBluishcColor}>
          Title of topic
        </Form.Label>
        <Form.Control
          type="text"
          name="title"
          className={appStyles.Input}
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="danger" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label className={appStyles.DarkBluishcColor}>Caption</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="caption"
          className={appStyles.Input}
          value={caption}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.caption?.map((message, idx) => (
        <Alert variant="danger" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.FormBtns} ${btnStyles.Button} ${btnStyles.BtnHover} mt-3 mb-0`}
        onClick={() => {
          history.goBack();
        }}
      >
        cancel
      </Button>
      <Button
        className={`${btnStyles.FormBtns} ${btnStyles.Button} ${btnStyles.BtnHover} mt-3 mb-0`}
        type="submit"
      >
        create
      </Button>
    </div>
  );

  return (
    <Form
      onSubmit={handleSubmit}
      className="mt-2 mt-md-5"
    >
      <Row 
      >
        <Col className="py-2 p-0 p-md-2">
          <Container
            className={`${styles.Container} d-flex flex-column justify-content-center pb-3 pt-2`}
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
            {errors?.image?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}

            <div>{textFields}</div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
};

export default PostCreateForm;
