import React from "react";
//styling
import styled from "styled-components";
//components
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import Contact from "../components/Contact";
import sacharoza from "../images/sacharoza.JPG";

const Home = () => {
  return (
    <HomeComponent>
      <AboutMe />
      <Project
        img={sacharoza}
        info={"Movies and Tv-shows database"}
        id="sacharoza"
        name="sacharoza"
        technologies={"react, styled-components"}
        gitLink={"https://github.com/luki752/sacharoza"}
        liveLink={"https://saharoza.vercel.app/"}
      />
      <Contact />
    </HomeComponent>
  );
};

const HomeComponent = styled.div``;

export default Home;
