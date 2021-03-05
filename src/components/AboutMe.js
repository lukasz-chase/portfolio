import React from "react";
//styling
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
//image
import twarz from "../images/twarz.JPG";
import Line from "./Line";

const AboutMe = () => {
  return (
    <AboutMeComponent>
      <div className="image">
        <img src={twarz} alt="" />
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
        <div className="technologies">
          <span>Im currently developing in technologies:</span>
          <ul>
            <li>HTML</li>
            <li>Java Script</li>
            <li>CSS</li>
            <li>Styled Components</li>
            <li>SCSS</li>
            <li>React</li>
            <li>Redux</li>
            <li>Material ui</li>
            <li>git</li>
          </ul>
        </div>
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
  }
  .image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 960px) {
      margin: 1rem;
    }
    img {
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
    }
    .personal-info {
      width: 80%;
      span {
        b {
          color: rgb(37, 136, 156);
        }
      }
    }
    .technologies {
      width: 90%;
      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li {
          padding: 1rem;
          margin: 0.5rem;
          border-radius: 1rem;
          background-color: white;
          transition: 0.3s ease-in all;
          &:hover {
            background-color: rgb(67, 185, 209);
          }
        }
      }
    }
  }
`;
export default AboutMe;
