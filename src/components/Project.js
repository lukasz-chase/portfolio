import React from "react";
//styling
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { imageAnimation, textAnimations } from "../animation";

const Project = ({ project }) => {
  const {
    img,
    name,
    info,
    technologies,
    buttons,
    id,
    imageOrder,
    textOrder,
    imageDirection,
    backend,
  } = project;
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
          {backend ? "frontend " : ""}tech stack:{" "}
          <p>
            <b>{technologies}</b>.
          </p>
          {backend && (
            <>
              backend tech stack:{" "}
              <p>
                <b>{backend}</b>.
              </p>
            </>
          )}
        </div>
        <div className="links">
          <ul>
            {buttons.map((button) => (
              <li>
                <a href={button.link} target="_blank" rel="noreferrer">
                  {button.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </ProjectComponent>
  );
};

const ProjectComponent = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 95%;
  background-image: linear-gradient(
    to top,
    rgba(255, 244, 235, 0.8) 0%,
    rgba(172, 203, 249, 0.8) 100%
  );
  margin: 1rem;
  border-radius: 5px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
  .image {
    margin: 1rem;
    width: 100%;
    height: 100vh;
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
        height: 100%;
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
    @media screen and (max-width: 1000px) {
      width: 100%;
      height: 50%;
      padding-bottom: 0.5rem;
    }
    .name {
      text-transform: upperCase;
      padding: 1rem;
      @media screen and (max-width: 1000px) {
        padding: 0.5rem;
        font-size: 0.9rem;
      }
    }
    .info {
      padding: 0 1rem;
      font-size: 1.2rem;
      text-align: center;
      @media screen and (max-width: 1000px) {
        font-size: 0.9rem;
        padding: 0 0.5rem;
      }
    }
    .technologies {
      padding: 1rem;
      text-align: Center;
      @media screen and (max-width: 1000px) {
        padding: 0.5rem;
        font-size: 0.9rem;
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
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
`;
export default Project;
