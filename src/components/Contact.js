import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  // setButtonText
  const [status, setStatus] = useState({});
  // setStatus

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   // let response = await fetch("http://localhost:5000/contact", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "Content-Type": "Application/json",
  //   //     // ;charset=utf-8
  //   //   },
  //   //   body: JSON.stringify(formDetails),
  //   // });
  // setButtonText("Send");
  //   // let result = await response.json();
  //   // console.log(result);
  //   setFormDetails(formInitialDetails);
  //   if (result.code === 200) {
  //     setStatus({
  //       success: true,
  //       message: "Message sent successfully. Thank you for reaching out!",
  //     });
  //   } else {
  //     setStatus({
  //       success: false,
  //       message: "Something went wrong, please try again later.",
  //     });
  //   }
  //   console.log(result.code);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const myForm = e.target;
    const formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
    // This is needed to prevent form from actually submitting and refreshing the page.
    setButtonText("Sending...");
    // Since Netlify handles the submission, you might only change this text or status based on a successful redirect or using AJAX if you prefer.

    // Reset form fields after submission, assuming success for demonstration (Netlify handles actual submission)
    setTimeout(() => {
      // Simulate asynchronous operation like an API call
      setFormDetails(formInitialDetails); // Reset form
      setButtonText("Send"); // Reset button text
      setStatus({
        message: "Message sent successfully. Thank you for reaching out!",
        success: true,
      }); // Simulated success message
    }, 2000); // Delay for demonstration, remove in actual use
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__heartBeat" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                </div>
              )}
            </TrackVisibility>
            <form
              onSubmit={handleSubmit}
              data-netlify="true"
              name="contact"
              method="post"
              //action="/thank-you"
            >
              <input type="hidden" name="form-name" value="contact" />

              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="firstName"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="lastName"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    name="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    name="message"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
