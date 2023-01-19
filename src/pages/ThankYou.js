import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { UseRedirect } from "../hooks/UseRedirect";
import styles from "../styles/ThankYou.module.css";
import ThankYouImage from "../assets/thank-you.png";
import { useHistory } from "react-router-dom";

const ThankYou = () => {
  const history = useHistory();

  UseRedirect("loggedOut");

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/");
    }, 4000);
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <Container className={`${styles.ThankYou} mt-2 mt-md-5 pb-3 pt-2`}>
      <img
        src={ThankYouImage}
        alt="thank you for contacting us"
        className="img-fluid"
      />
    </Container>
  );
};

export default ThankYou;
