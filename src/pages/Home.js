import React from "react";
//styling
import styled from "styled-components";
//components
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";
//images
import sacharoza from "../images/sacharoza.JPG";
import portfolio from "../images/portfolio.JPG";
import hepar from "../images/hepar.jpg";
import parsec from "../images/parsec.jpg";
import benzen from "../images/benzen.jpg";

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

      <Project
        img={sacharoza}
        info="My first react project in which users can look through a database of movies and tv-shows and inspect details"
        id="sacharoza"
        name="sacharoza"
        technologies="react and styled-components"
        gitLink="https://github.com/luki752/sacharoza"
        liveLink="https://saharoza.vercel.app/"
        textOrder="2"
        imageOrder="1"
      />
      <Project
        img={hepar}
        info="Web application with food trivia, jokes and recipes. Find a recipe you like, check every ingredient you have and every step you make. If you have food related questions in bottom-right corner theres a chatbot, that will answer them."
        id="hepar"
        name="hepar"
        technologies="react, scss and redux"
        gitLink="https://github.com/luki752/hepar"
        liveLink="https://hepar.vercel.app/"
        textOrder="1"
        imageOrder="2"
        imageDirection="left"
      />
      <Project
        img={parsec}
        info="Project that I made to learn material-ui and its simplicity. It allows it's user to find a character, location or episode from rick and morty's universe"
        id="parsec"
        name="parsec"
        technologies="react, styled-components and material ui"
        gitLink="https://github.com/luki752/parsec"
        liveLink="https://parsec.vercel.app/"
        textOrder="2"
        imageOrder="1"
      />
      <Project
        img={benzen}
        info="My biggest project yet. It's a e-commerce shop for clothes with json-server powered backend. If you log in as an admin you can manage store items and users(add, edit and delete)."
        id="benzen"
        name="benzen"
        technologies="react, styled-components, material ui and redux"
        gitLink="https://github.com/luki752/benzen"
        liveLink="https://benzen.vercel.app/"
        textOrder="1"
        imageOrder="2"
        imageDirection="left"
      />
      <Project
        img={portfolio}
        info="It is the site that you are currently browsing. It was made for reviewers to have easier access to my work."
        id="portfolio"
        name="portfolio"
        technologies="react, styled-components, react-scroll and framer motion"
        gitLink="https://github.com/luki752/portfolio"
        liveLink="https://portfolio-qfjjqndcn-luki752.vercel.app"
        textOrder="2"
        imageOrder="1"
      />
      <Contact />
    </HomeComponent>
  );
};

const HomeComponent = styled.div`
  .projects-header {
    display: Flex;
    justify-content: Center;
    align-items: center;
    flex-direction: Column;
    text-align: Center;
    height: 15vw;
    font-size: 2rem;
    font-weight: bold;
    p {
      font-size: 1rem;
      font-weight: normal;
      @media screen and (max-width: 960px) {
        font-size: 0.5rem;
      }
    }
    @media screen and (max-width: 960px) {
      height: 25vh;
      font-size: 1.5rem;
    }
  }
`;

export default Home;
