import React from "react";
//styling
import styled from "styled-components";
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
          styled-components
        </li>
        <li>
          <DiSass className="icon" />
          Sass
        </li>
        <li>
          <SiMaterialUi className="icon" /> Material-UI
        </li>
        <li>
          <DiJavascript1 className="icon" />
          JavaScript
        </li>
        <li>
          <SiTypescript className="icon" />
          TypeScript
        </li>
        <li>
          <FaReact className="icon" />
          React
        </li>
        <li>
          <SiRedux className="icon" />
          Redux
        </li>
        <li>Zustand</li>
        <li>
          <AiFillGithub className="icon" /> git
        </li>
      </ul>
    </TechnologiesComponent>
  );
};

const TechnologiesComponent = styled.div`
  height: 90vh;
  display: flex;
  justify-content: Center;
  align-items: Center;
  flex-direction: column;
  font-size: 2rem;
  @media screen and (max-width: 960px) {
    font-size: 1rem;
    height: 70vh;
    justify-content: flex-end;
  }
  @media screen and (max-height: 700px) {
    height: 84vh;
  }
  span {
    font-weight: bold;
    text-transform: uppercase;
    color: white;
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
