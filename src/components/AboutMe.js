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
      <div className="image">
        <img src={twarz} alt="me" />
        <Wave />
      </div>
      <div className="info">
        <div className="personal-info">
          <span>
            Hello, my name is <b>Łukasz Ścigaj</b>. I am a young, diligent and
            goal-oriented <b>developer</b>.
            <p>
              Always eager to learn new technologies and expand my skillset.
            </p>
          </span>
        </div>

        <Line />
        <div className="education">
          Education:
          <span>
            Bachelors in Computer Engineering
            <p>PWSZ Oświęcim 2020 - present</p>
          </span>
        </div>
      </div>
    </AboutMeComponent>
  );
};

const AboutMeComponent = styled.div`
  display: flex;
  height: 100vh;
  @media screen and (max-width: 960px) {
    padding-top: 3rem;
    flex-direction: column;
    width: 100%;
    height: 50vh;
  }
  .image {
    flex: 1;
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
    flex: 1.2;
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
      padding-top: 1rem;
    }
    .personal-info {
      width: 90%;
      color: white;
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
    .education {
      display: flex;
      flex-direction: column;
      color: white;
      @media screen and (max-width: 960px) {
        width: 90%;
      }
      span {
        font-size: 1.5rem;
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
