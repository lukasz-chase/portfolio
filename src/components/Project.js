import React from "react";
//styling
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { imageAnimation, textAnimations } from "../animation";

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
      <motion.div
        className="details"
        style={{
          order: textOrder,
        }}
        variants={textAnimations}
        ref={element}
        animate={controls}
        initial="hidden"
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
      </motion.div>
    </ProjectComponent>
  );
};

const ProjectComponent = styled(motion.div)`
  display: flex;
  align-items: Center;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  .image {
    margin: 1rem;
    width: 100%;
    height: 90vh;
    @media screen and (max-width: 1000px) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50%;
    }
    img {
      height: 90%;
      width: 100%;
      object-fit: cover;
      @media screen and (max-width: 1000px) {
        clip-path: none;
      }
    }
  }
  .details {
    width: 40%;
    height: 90vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: Center;
    color: white;
    @media screen and (max-width: 1000px) {
      width: 100%;
      height: 50%;
    }
    .name {
      text-transform: upperCase;
      padding: 1rem;
      @media screen and (max-width: 1000px) {
        padding: 0.5rem;
        font-size: 0.8rem;
      }
    }
    .info {
      padding: 0 1rem;
      font-size: 1rem;
      text-align: center;
      @media screen and (max-width: 1000px) {
        font-size: 0.7rem;
        padding: 0 0.5rem;
      }
    }
    .technologies {
      padding: 1rem;
      text-align: Center;
      @media screen and (max-width: 1000px) {
        padding: 0.5rem;
        font-size: 0.7rem;
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
            margin: 0.5rem 0;
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
              font-size: 0.7rem;
            }
          }
        }
      }
    }
  }
`;
export default Project;
