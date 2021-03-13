import React from "react";
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
  return (
    <TechnologiesComponent id="technologies">
      <span>My current tech stack includes:</span>
      <ul>
        <li>
          <AiFillHtml5 className="icon" />
          HTML
        </li>
        <li>
          <DiCss3 className="icon" />
          CSS
        </li>
        <li>
          <SiStyledComponents className="icon" />
          Styled Components
        </li>
        <li>
          <DiSass className="icon" />
          SASS
        </li>
        <li>
          <DiJavascript1 className="icon" />
          Java Script
        </li>
        <li>
          <SiTypescript className="icon" />
          Type Script
        </li>
        <li>
          <FaReact className="icon" />
          React
        </li>
        <li>
          <SiRedux className="icon" />
          Redux
        </li>
        <li>
          <SiMaterialUi className="icon" /> Material ui
        </li>
        <li>
          <AiFillGithub className="icon" /> git
        </li>
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
    padding: 0.5rem 0;
    text-transform: uppercase;
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
      transition: 0.3s ease-in all;
      @media screen and (max-width: 960px) {
        padding: 0.5rem;
        margin: 0.5rem;
        flex-direction: column;
        text-align: center;
      }
      &:hover {
        background-color: rgb(67, 185, 209);
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