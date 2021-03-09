import React from "react";
//styling
import styled from "styled-components";
//animation
import { motion } from "framer-motion";

const Project = ({ img, name, info, technologies, gitLink, liveLink, id }) => {
  return (
    <ProjectComponent id={id}>
      <div className="name">{name}</div>
      <div className="info">{info}</div>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="technologies">
        technologies used to create this project: {technologies}
      </div>
      <div className="links">
        <ul>
          <li>
            <a href={gitLink}>github</a>
          </li>
          <li>
            <a href={liveLink}>live</a>
          </li>
        </ul>
      </div>
    </ProjectComponent>
  );
};

const ProjectComponent = styled(motion.div)`
  height: 100vh;
  width: 100%;
  .image {
    img {
      height: 5rem;
      width: 5rem;
      @media screen and (max-width: 1000px) {
        height: 14rem;
        width: 100%;
      }
    }
  }
`;
export default Project;
