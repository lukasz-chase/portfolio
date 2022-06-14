import React from "react";
//styling
import styled from "styled-components";
//image
import twarz from "../images/twarz.png";
//components
import Line from "./Line";
import Wave from "./Wave";

const AboutMe = () => {
  return (
    <AboutMeComponent id="about-me">
      <div className="wrapper">
        <div className="image">
          <img src={twarz} alt="me" />
          <Wave />
        </div>
        <Line />
        <div className="personal-info">
          <span>
            Hello, my name is <b>Łukasz Ścigaj</b>. I am a young, diligent and
            goal-oriented <b>developer</b>.
            <p>
              Always eager to learn new technologies and expand my skillset.
            </p>
          </span>
        </div>
      </div>

      <div className="info">
        <div className="education">
          Education:
          <span>
            Bachelors in Computer Engineering
            <p>PWSZ Oświęcim 2020 - present</p>
          </span>
        </div>
        <div className="experience">
          Experience:
          <span>
            Full-Stack Developer
            <p>GOOD 2021.08 - present</p>
          </span>
        </div>
      </div>
    </AboutMeComponent>
  );
};

const AboutMeComponent = styled.div`
  display: flex;
  height: 100vh;
  font-size: 2rem;
  color: white;
  @media screen and (max-width: 960px) {
    font-size: 1rem;
    padding-top: 3rem;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .wrapper {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .personal-info {
      width: 90%;
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
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    @media screen and (max-width: 960px) {
      width: 100%;
      padding-top: 1.5rem;
    }
    img {
      z-index: 2;
      height: 25rem;
      width: 20rem;
      object-fit: cover;
      border-radius: 50px;
      @media screen and (max-width: 960px) {
        height: 12rem;
        width: 9rem;
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
    gap: 3rem;
    font-size: 3rem;
    @media screen and (max-width: 960px) {
      font-size: 1rem;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      padding-top: 1rem;
      gap: 1rem;
    }
    .education,
    .experience {
      display: flex;
      flex-direction: column;
      color: white;
      @media screen and (max-width: 960px) {
        width: 90%;
      }
      span {
        font-size: 2rem;
        @media screen and (max-width: 960px) {
          font-size: 1rem;
        }
      }
      p {
        font-size: 1rem;
        @media screen and (max-width: 960px) {
          font-size: 0.6rem;
        }
      }
    }
  }
`;
export default AboutMe;
