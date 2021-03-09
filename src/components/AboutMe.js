import React from "react";
//styling
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
import { technologiesAnimation } from "../animation.js";
//image
import twarz from "../images/twarz.JPG";
import Line from "./Line";
//icons
import { FaReact } from "react-icons/fa";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { SiStyledComponents, SiRedux, SiMaterialUi } from "react-icons/si";
import { DiJavascript1, DiCss3, DiSass } from "react-icons/di";
//components
import Wave from "./Wave";

const AboutMe = () => {
  return (
    <AboutMeComponent id="about-me">
      <div className="image">
        <img src={twarz} alt="" />
        <Wave />
      </div>
      <div className="info">
        <div className="personal-info">
          <span>
            Hello, my name is <b>Łukasz Ścigaj</b>. I'm studying{" "}
            <b>informatics</b> on Małopolska Uczelnia Państwowa in Oświęcim, im
            currently in second semester.{" "}
          </span>
        </div>

        <Line />
        <motion.div
          className="technologies"
          variants={technologiesAnimation}
          initial="hidden"
          animate="show"
        >
          <span>Im currently developing in technologies:</span>
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
        </motion.div>
      </div>
    </AboutMeComponent>
  );
};

const AboutMeComponent = styled(motion.div)`
  display: flex;
  min-height: 100vh;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  padding-top: 5rem;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
  .image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 960px) {
      width: 100%;
    }
    img {
      z-index: 2;
      height: 35rem;
      width: 25rem;
      border: 1px solid black;
      object-fit: cover;
      @media screen and (max-width: 960px) {
        height: 17rem;
        width: 12rem;
      }
    }
  }
  .info {
    z-index: 2;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 2rem;
    @media screen and (max-width: 960px) {
      font-size: 1rem;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    }
    .personal-info {
      width: 80%;
      @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        b {
          color: rgb(37, 136, 156);
        }
      }
    }
    .technologies {
      width: 90%;
      @media screen and (max-width: 960px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
          margin: 0.5rem;
          border-radius: 1rem;
          background-color: white;
          transition: 0.3s ease-in all;
          @media screen and (max-width: 960px) {
            padding: 0.5rem;
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
    }
  }
`;
export default AboutMe;
