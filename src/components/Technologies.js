import React from "react";
//styling
import styled from "styled-components";
//data
import { technologies } from "../descriptions/technologies";
const Technologies = () => {
  return (
    <TechnologiesComponent id="technologies">
      <span>My current tech stack includes:</span>
      <ul>
        {technologies.map(({ icon, label }) => (
          <li>
            {icon}
            {label}
          </li>
        ))}
      </ul>
    </TechnologiesComponent>
  );
};

const TechnologiesComponent = styled.div`
  display: flex;
  justify-content: Center;
  align-items: Center;
  flex-direction: column;
  font-size: 2rem;
  margin-top: 10rem;
  @media screen and (max-width: 960px) {
    margin-top: 2rem;
    font-size: 1rem;
    justify-content: flex-end;
  }
  span {
    font-weight: bold;
    text-transform: uppercase;
    color: white;
  }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: auto auto auto;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      margin: 1rem;
      border-radius: 1rem;
      background-color: white;
      @media screen and (max-width: 960px) {
        padding: 0.5rem;
        margin: 0.5rem;
        flex-direction: column;
        text-align: center;
      }
      .icon {
        margin-right: 0.5rem;
        @media screen and (max-width: 960px) {
          margin: 0;
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export default Technologies;
