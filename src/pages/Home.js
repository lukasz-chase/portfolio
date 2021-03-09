import React from "react";
//styling
import styled from "styled-components";
//components
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import Contact from "../components/Contact";
//images
import sacharoza from "../images/sacharoza.JPG";
import hepar from "../images/hepar.jpg";
import parsec from "../images/parsec.jpg";
import benzen from "../images/benzen.jpg";

const Home = () => {
  return (
    <HomeComponent>
      <AboutMe />
      <Project
        img={sacharoza}
        info={"Movies and TV-Shows database"}
        id="sacharoza"
        name="sacharoza"
        technologies={"react, styled-components"}
        gitLink={"https://github.com/luki752/sacharoza"}
        liveLink={"https://saharoza.vercel.app/"}
        textOrder={"2"}
        imageOrder={"1"}
      />
      <Project
        img={hepar}
        info={"Food related informations"}
        id="hepar"
        name="hepar"
        technologies={"react, scss and redux"}
        gitLink={"https://github.com/luki752/hepar"}
        liveLink={"https://hepar.vercel.app/"}
        textOrder={"1"}
        imageOrder={"2"}
        imageDirection={"left"}
      />
      <Project
        img={parsec}
        info={"Rick and Morty database"}
        id="parsec"
        name="hepar"
        technologies={"react, styled-components and material ui"}
        gitLink={"https://github.com/luki752/parsec"}
        liveLink={"https://parsec.vercel.app/"}
        textOrder={"2"}
        imageOrder={"1"}
      />
      <Project
        img={benzen}
        info={"Reserved clone"}
        id="benzen"
        name="benzen"
        technologies={"react, styled-components, material ui and redux"}
        gitLink={"https://github.com/luki752/benzen"}
        liveLink={"https://benzen.vercel.app/"}
        textOrder={"1"}
        imageOrder={"2"}
        imageDirection={"left"}
      />
      <Contact />
    </HomeComponent>
  );
};

const HomeComponent = styled.div``;

export default Home;
