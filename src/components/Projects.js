import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/svenska_101.PNG";
import projImg2 from "../assets/img/forkify.png";
import projImg3 from "../assets/img/305zombie.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Svenska 101",
      description:
        "Swedish social media app. Connect, message, comment, and listen to Swedish radio. \n Built with React, Express, Node.js, and MongoDB.",
      imgUrl: projImg1,
      projectUrl: "https://github.com/Messinias1/Svenska",
    },
    {
      title: "Spoonful",
      description:
        "Recipe lookup website, add a recipe, and bookmark recipes. \n Built with Javascript, HTML, CSS. Uploaded to netlify.",
      imgUrl: projImg2,
      projectUrl: "https://spoonful-carl.netlify.app/",
    },
    {
      title: "Zombie Game",
      description:
        "Wave based zombie game. Attack zombies, collect coins and health potions. \n Built with python and pygame.",
      imgUrl: projImg3,
      projectUrl: "https://github.com/CSC305/f22m",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__pulse" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>A curated selection of my projects.</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                varient="pills"
                className="nav-pills mb-5 justify-content-center-align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
