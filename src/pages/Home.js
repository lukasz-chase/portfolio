import React from "react";
//styling
import styled from "styled-components";
//components
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";
//data
import { projects } from "../descriptions/projects";

const Home = () => {
  return (
    <HomeComponent>
      <AboutMe />
      <Technologies />
      <div className="projects-header">
        Here are my projects,
        <p>
          in order from oldest to newest. Find out how much i have improved.
        </p>
      </div>
      {projects.map((project) => (
        <Project project={project} />
      ))}
      <Contact />
    </HomeComponent>
  );
};

const HomeComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .projects-header {
    display: Flex;
    justify-content: Center;
    align-items: center;
    flex-direction: Column;
    text-align: Center;
    height: 15vw;
    font-size: 2rem;
    font-weight: bold;
    background-color: black;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgb(28, 27, 27) 0%,
      rgb(26, 23, 23) 100%
    );
    color: White;
    p {
      color: rgba(255, 255, 255, 0.4);
      font-size: 1rem;
      font-weight: normal;
      @media screen and (max-width: 960px) {
        font-size: 0.7rem;
      }
    }
    @media screen and (max-width: 960px) {
      height: 25vh;
      font-size: 1.5rem;
    }
  }
`;

export default Home;
