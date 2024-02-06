import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/CK-Logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import gitIcon from "../assets/img/icons8-github-128.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          {/* <MailchimpForm /> */}
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/carl-kakisis/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Messinias1">
                <img src={gitIcon} alt="" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved Carl Kakisis</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
