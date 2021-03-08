import React from "react";
//styling
import styled from "styled-components";
//components
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <HomeComponent>
      <AboutMe />
      <Project />
      <Contact />
    </HomeComponent>
  );
};

const HomeComponent = styled.div``;

export default Home;
