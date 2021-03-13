import React from "react";
//styling
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { imageAnimation } from "../animation";

const Project = ({
  img,
  name,
  info,
  technologies,
  gitLink,
  liveLink,
  id,
  imageOrder,
  textOrder,
  imageDirection,
}) => {
  const [element, controls] = useScroll();
  return (
    <ProjectComponent id={id}>
      <div
        className="image"
        style={{
          order: imageOrder,
        }}
      >
        <motion.img
          src={img}
          alt=""
          variants={imageAnimation}
          ref={element}
          animate={controls}
          initial="hidden"
          style={{
            clipPath:
              imageDirection === "left" && window.innerWidth > 1000
                ? "polygon(0 0, 100% 0%, 100% 100%, 30% 100%)"
                : "polygon(0 0, 100% 0%, 70% 100%, 0% 100%)",
            alignSelf: imageDirection === "left" ? "flex-start" : "flex-end",
          }}
        />
      </div>
      <div
        className="details"
        style={{
          order: textOrder,
        }}
      >
        <div className="name">
          <h1>{name}</h1>
        </div>
        <div className="info">{info}</div>
        <div className="technologies">
          tech stack:{" "}
          <p>
            <b>{technologies}</b>.
          </p>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href={liveLink} target="_blank" rel="noreferrer">
                See it live
              </a>
            </li>
            <li>
              <a href={gitLink} target="_blank" rel="noreferrer">
                Check the code on github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </ProjectComponent>
  );
};

const ProjectComponent = styled(motion.div)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: Center;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  .image {
    margin: 1rem;
    width: 100%;
    height: 85%;
    @media screen and (max-width: 1000px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      @media screen and (max-width: 1000px) {
        height: 20rem;
        clip-path: none;
      }
    }
  }
  .details {
    width: 40%;
    height: 85%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: Center;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
    .name {
      text-transform: upperCase;
      padding: 1rem;
      @media screen and (max-width: 1000px) {
        padding: 0.5rem;
      }
    }
    .info {
      padding: 0 1rem;
      font-size: 1rem;
      @media screen and (max-width: 1000px) {
        font-size: 1rem;
        padding: 0 0.5rem;
      }
    }
    .technologies {
      padding: 1rem;
      text-align: Center;
      @media screen and (max-width: 1000px) {
        padding: 0.5rem;
      }
    }
    .links {
      ul {
        display: flex;
        align-items: Center;
        justify-content: Center;
        flex-direction: column;
        list-style: none;
        li {
          margin: 1.5rem 0;
          @media screen and (max-width: 1000px) {
            margin: 1rem 0;
          }
          a {
            padding: 1rem;
            text-decoration: none;
            background-color: white;
            color: black;
            border-radius: 1rem;
            transition: 0.3s ease-in-out;
            &:hover {
              cursor: pointer;
              background-color: rgb(67, 185, 209);
            }
            @media screen and (max-width: 1000px) {
              padding: 0.5rem;
            }
          }
        }
      }
    }
  }
`;
export default Project;
