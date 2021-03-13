import React, { useRef } from "react";
//styling
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
//icons
import { FaReact } from "react-icons/fa";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiStyledComponents,
  SiRedux,
  SiMaterialUi,
  SiTypescript,
} from "react-icons/si";
import { DiJavascript1, DiCss3, DiSass } from "react-icons/di";

const Technologies = () => {
  const constraintsRef = useRef(null);
  return (
    <TechnologiesComponent id="technologies" ref={constraintsRef}>
      <span>My current tech stack includes:</span>
      <p>Drag them and have fun!</p>
      <ul>
        <motion.li drag dragConstraints={constraintsRef}>
          <AiFillHtml5 className="icon" />
          HTML
        </motion.li>
        <motion.li drag dragConstraints={constraintsRef}>
          <DiCss3 className="icon" />
          CSS
        </motion.li>
        <motion.li drag dragConstraints={constraintsRef}>
          <SiStyledComponents className="icon" />
          Styled Components
        </motion.li>
        <motion.li drag dragConstraints={constraintsRef}>
          <DiSass className="icon" />
          SASS
        </motion.li>
        <motion.li drag dragConstraints={constraintsRef}>
          <DiJavascript1 className="icon" />
          Java Script
        </motion.li>
        <motion.li drag dragConstraints={constraintsRef}>
          <SiTypescript className="icon" />
          Type Script
        </motion.li>
        <motion.li drag dragConstraints={constraintsRef}>
          <FaReact className="icon" />
          React
        </motion.li>
        <motion.li drag dragConstraints={constraintsRef}>
          <SiRedux className="icon" />
          Redux
        </motion.li>
        <motion.li drag dragConstraints={constraintsRef}>
          <SiMaterialUi className="icon" /> Material ui
        </motion.li>
        <motion.li drag dragConstraints={constraintsRef}>
          <AiFillGithub className="icon" /> git
        </motion.li>
      </ul>
    </TechnologiesComponent>
  );
};

const TechnologiesComponent = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  justify-content: Center;
  align-items: Center;
  flex-direction: column;
  font-size: 2rem;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
  span {
    font-weight: bold;
    text-transform: uppercase;
  }
  p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: auto auto auto;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      margin: 1rem;
      border-radius: 1rem;
      background-color: white;
      @media screen and (max-width: 960px) {
        padding: 0.5rem;
        margin: 0.5rem;
        flex-direction: column;
        text-align: center;
      }
      .icon {
        margin-right: 0.5rem;
        @media screen and (max-width: 960px) {
          margin: 0;
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export default Technologies;
