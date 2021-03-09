import React from "react";
//styling
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
//icons
import { AiFillGithub, AiFillFacebook, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <ContactComponent id="contact">
      <div className="header">Contact</div>
      <div className="contact-info">
        <div className="contact">
          <a
            href="mailto: lukasz.scigaj00@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail className="icon" />
            <h1>Send me an email: lukasz.scigaj00@gmail.com</h1>
          </a>
        </div>
        <div className="contact">
          <a
            href="https://www.facebook.com/profile.php?id=100006156968986"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook className="icon" />
            <h1>Message me on Facebook</h1>
          </a>
        </div>
        <div className="contact">
          <a href="https://github.com/luki752" target="_blank" rel="noreferrer">
            <AiFillGithub className="icon" />
            <h1>Look through my github</h1>
          </a>
        </div>
      </div>
    </ContactComponent>
  );
};

const ContactComponent = styled(motion.div)`
  min-height: 100vh;
  background-color: #dcd9d4;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    radial-gradient(
      at 50% 0%,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(0, 0, 0, 0.5) 50%
    );
  background-blend-mode: soft-light, screen;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .header {
    font-size: 3rem;
  }
  .contact-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      width: 100%;
    }
    .contact {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      font-size: 0.8rem;
      @media screen and (max-width: 1000px) {
        margin: 0.5rem 0rem;
        width: 100%;
        font-size: 0.6rem;
      }
      a {
        text-align: center;
        color: black;
        text-decoration: none;
        background-color: white;
        border-radius: 1rem;
        padding: 1rem;
        transition: 0.3s ease-in all;
        @media screen and (max-width: 1000px) {
          width: 100%;
        }
        &:hover {
          background-color: rgb(67, 185, 209);
        }
        .icon {
          font-size: 2rem;
        }
      }
    }
  }
`;
export default Contact;
