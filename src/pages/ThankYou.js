import React from "react";
import { UseRedirect } from "../hooks/UseRedirect";

const ThankYou = () => {
  UseRedirect("loggedOut");
  return <div>Thank you for contacting us</div>;
};

export default ThankYou;
