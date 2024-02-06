import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nodeImg from "../assets/img/icons8-node-js.svg";
import javascriptImg from "../assets/img/icons8-javascript.svg";
import htmlImg from "../assets/img/icons8-html.svg";
import cssImg from "../assets/img/icons8-css.svg";
import reactImg from "../assets/img/icons8-react-native.svg";
import pythonImg from "../assets/img/icons8-python.svg";
import cPlusImg from "../assets/img/icons8-c.svg";
import expressImg from "../assets/img/icons8-express-js.svg";
import mongoImg from "../assets/img/icons8-mongodb.svg";
import sqlImg from "../assets/img/icons8-mysql.svg";
import gitImg from "../assets/img/icons8-git.svg";

import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__pulse" : ""
                    }
                  >
                    <h2>Skills</h2>
                    <p>
                      Here is a carousel of my relevant skills.<br></br>
                    </p>
                  </div>
                )}
              </TrackVisibility>
              <Slider
                // responsive={responsive}
                // infinite={true}
                className="skill-slider"
                {...settings}
              >
                <div className="item">
                  <img src={javascriptImg} alt="" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={htmlImg} alt="" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={cssImg} alt="" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={reactImg} alt="" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={pythonImg} alt="" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={cPlusImg} alt="" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={expressImg} alt="" />
                  <h5>Express js</h5>
                </div>
                <div className="item">
                  <img src={mongoImg} alt="" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={sqlImg} alt="" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={gitImg} alt="" />
                  <h5>Git/Github</h5>
                </div>
                <div className="item">
                  <img src={nodeImg} alt="" />
                  <h5>Node js</h5>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
