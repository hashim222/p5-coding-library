import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    favourite_programming_language: "",
    years_of_experience: "",
    about_me: "",
    image: "",
  });
  const {
    name,
    favourite_programming_language,
    years_of_experience,
    about_me,
    image,
  } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const {
            name,
            favourite_programming_language,
            years_of_experience,
            about_me,
            image,
          } = data;
          setProfileData({
            name,
            favourite_programming_language,
            years_of_experience,
            about_me,
            image,
          });
        } catch (error) {
          // console.log(error);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append(
      "favourite_programming_language",
      favourite_programming_language
    );
    formData.append("years_of_experience", years_of_experience);
    formData.append("about_me", about_me);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      history.goBack();
    } catch (error) {
      // console.log(error);
      setErrors(error.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label className={appStyles.DarkBluishcColor}>Name</Form.Label>
        <Form.Control
          className={appStyles.Input}
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          aria-label="name"
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
        <Alert variant="danger" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label className={appStyles.DarkBluishcColor}>
          Years of experience
        </Form.Label>
        <Form.Control
          as="select"
          className={`${appStyles.Input} form-select`}
          name="years_of_experience"
          onChange={handleChange}
          value={years_of_experience}
          aria-label="years_of_experience"
        >
          <option className="fw-bold" value="">
            Choose years of experience
          </option>
          <option value="Less than 1 year">Less than 1 year</option>
          <option value="1 Year">1 Year</option>
          <option value="2 Years">2 Years</option>
          <option value="3 Years">3 Years</option>
          <option value="4 Years">4 Years</option>
          <option value="5 or More years">More than 5 years</option>
        </Form.Control>
      </Form.Group>
      {errors?.years_of_experience?.map((message, idx) => (
        <Alert variant="danger" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label className={appStyles.DarkBluishcColor}>
          Your favorite programming language
        </Form.Label>
        <Form.Control
          as="select"
          name="favourite_programming_language"
          onChange={handleChange}
          value={favourite_programming_language}
          className={`${appStyles.Input} form-select`}
          aria-label="favourite_programming_language"
        >
          <option className="fw-bold" value="">
            Choose Language
          </option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Javascript">Javascript</option>
          <option value="python">python</option>
          <option value="Java">Java</option>
          <option value="C and C++">C and C++</option>
          <option value="PHP">PHP</option>
          <option value="C#">C#</option>
        </Form.Control>
      </Form.Group>
      {errors?.favourite_programming_language?.map((message, idx) => (
        <Alert variant="danger" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label className={appStyles.DarkBluishcColor}>About me</Form.Label>
        <Form.Control
          as="textarea"
          value={about_me}
          onChange={handleChange}
          name="about_me"
          rows={3}
          className={appStyles.Input}
        />
      </Form.Group>

      {errors?.about_me?.map((message, idx) => (
        <Alert variant="danger" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.FormBtns} ${btnStyles.Button} ${btnStyles.BtnHover}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button
        className={`${btnStyles.FormBtns} ${btnStyles.Button} ${btnStyles.BtnHover}`}
        type="submit"
      >
        save
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}
    className="mt-2 mt-md-5"
    >
      <Row className={appStyles.Container}>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container>
            <Form.Group>
              {image && (
                <figure>
                  <Image src={image} fluid />
                </figure>
              )}
              {errors?.image?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className={`${btnStyles.FormBtns} ${btnStyles.Button} ${btnStyles.BtnHover} my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
              <Form.Control
                type="file"
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileEditForm;
