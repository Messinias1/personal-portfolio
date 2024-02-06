import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              Project Site
            </a>
          </p>
        </div>
      </div>
    </Col>
  );
};
