import React from "react";
//styling
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
//data
import { contactList } from "../descriptions/contacts";

const Contact = () => {
  return (
    <ContactComponent id="contact">
      <div className="header">Contact</div>
      <div className="contact-info">
        {contactList.map((contact) => (
          <div className="contact">
            <a href={contact.link} target="_blank" rel="noreferrer">
              {contact.icon}
              <h1> {contact.label}</h1>
            </a>
          </div>
        ))}
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
  @media screen and (max-width: 1000px) {
    height: 90vh;
  }
  .header {
    font-size: 3rem;
  }
  .contact-info {
    display: flex;
    flex-wrap: wrap;
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
