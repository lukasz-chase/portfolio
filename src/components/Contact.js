import React from "react";
//styling
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
//icons
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

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
          <a href="https://github.com/luki752" target="_blank" rel="noreferrer">
            <AiFillGithub className="icon" />
            <h1>Check out my github</h1>
          </a>
        </div>
        <div className="contact">
          <a
            href="https://www.linkedin.com/in/%C5%82ukasz-%C5%9Bcigaj-bba82b212/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="icon" />
            <h1>Find me on linkedin</h1>
          </a>
        </div>
      </div>
    </ContactComponent>
  );
};

const ContactComponent = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
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
        height: 8rem;
        width: 25rem;
        margin: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        color: black;
        text-decoration: none;
        background-color: white;
        border-radius: 1rem;
        transition: 0.3s ease-in all;
        @media screen and (max-width: 1000px) {
          width: 100%;
          margin: 0.5rem;
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
