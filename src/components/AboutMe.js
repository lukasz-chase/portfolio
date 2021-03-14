import React from "react";
//styling
import styled from "styled-components";
//image
import twarz from "../images/twarz.JPG";
import Line from "./Line";
//components
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
            Hello, my name is <b>Łukasz Ścigaj</b>. I am young, hard-working,
            eager to work, eager to learn new technologies, always looking to
            improve my skills <b>programmer</b>.
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
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  padding-top: 2rem;
  @media screen and (max-width: 960px) {
    padding-top: 3rem;
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
        height: 19rem;
        width: 14rem;
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
    .education {
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 960px) {
        padding: 0rem 2rem;
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
