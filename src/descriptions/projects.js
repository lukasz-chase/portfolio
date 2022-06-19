//images
import sacharoza from "../images/sacharoza.JPG";
import portfolio from "../images/portfolio.PNG";
// import hepar from "../images/hepar.jpg";
import parsec from "../images/parsec.jpg";
import benzen from "../images/benzen.jpg";
import amina from "../images/Amina.PNG";

export const projects = [
  {
    img: sacharoza,
    info: "My first react project in which users can look through a database of movies and tv-shows and inspect details",
    id: "sacharoza",
    name: "sacharoza",
    technologies: "react and styled-components",
    buttons: [
      {
        label: "See it live",
        link: "https://sacharoza.netlify.app/",
      },
      {
        label: "Check the code on github",
        link: "https://github.com/luki752/sacharoza",
      },
    ],
    textOrder: "1",
    imageOrder: "2",
  },
  {
    img: parsec,
    info: "Project that I made to learn material-ui and its simplicity. It allows its user to find a character, location or episode from rick and morty's universe",
    id: "parsec",
    name: "parsec",
    technologies: "react, styled-components and material ui",
    buttons: [
      {
        label: "See it Live",
        link: "https://parsec2.netlify.app/",
      },
      {
        label: "Check the code on github",
        link: "https://github.com/luki752/parsec",
      },
    ],
    textOrder: "2",
    imageOrder: "1",
  },
  {
    img: benzen,
    info: "My biggest project yet. It's a e-commerce shop for clothes with node.js powered backend. If you log in as an admin you can manage store items and users(add, edit and delete).",
    id: "benzen",
    name: "benzen",
    technologies: "react, styled-components, material ui and redux",
    backend: "node.js, express and mongodb",
    buttons: [
      {
        label: "See it Live",
        link: "https://benzen.netlify.app/",
      },
      {
        label: "Check frontend on github",
        link: "https://github.com/luki752/benzen",
      },
      {
        label: "Check backend on github",
        link: "https://github.com/luki752/benzen-server",
      },
    ],
    textOrder: "1",
    imageOrder: "2",
    imageDirection: "left",
  },
  {
    img: amina,
    info: "Project that I made to learn TypeScript and zustand. Find a community that you like and join it, like posts that you find interesting and comment them. Create your own posts and communities.",
    id: "amina",
    name: "amina",
    technologies:
      "react, styled-components, TypeScript, zustand and material ui",
    backend: "node.js, express and mongodb",
    buttons: [
      {
        label: "See it live",
        link: "https://amina2.netlify.app/",
      },
      {
        label: "Check the code on github",
        link: "https://github.com/luki752/amina",
      },
      {
        label: "Check backend on github",
        link: "https://github.com/luki752/amina-server",
      },
    ],
    textOrder: "2",
    imageOrder: "1",
  },
  {
    img: portfolio,
    info: "It is the site that you are currently browsing. It was made for reviewers to have easier access to my work.",
    id: "portfolio",
    name: "portfolio",
    technologies: "react, styled-components, react-scroll and framer motion",
    buttons: [
      {
        label: "See it live",
        link: "https://ls00portfolio.netlify.app/",
      },
      {
        label: "Check the code on github",
        link: "https://github.com/luki752/portfolio",
      },
    ],
    textOrder: "1",
    imageOrder: "2",
  },
];
