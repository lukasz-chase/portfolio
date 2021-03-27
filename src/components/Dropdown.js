import React from "react";
//styling
import styled from "styled-components";
//components
import { MenuItems } from "./MenuItems";
//react scroll
import { Link } from "react-scroll";

const Dropdown = () => {
  return (
    <DropdownComponent>
      <ul>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link
              className={item.cName}
              to={item.path}
              smooth={true}
              duration={500}
              offset={-80}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </DropdownComponent>
  );
};

const DropdownComponent = styled.div`
  width: 200px;
  position: absolute;
  top: 80px;
  ul {
    list-style: none;
    text-align: start;
    li {
      background: rgba(0, 0, 0, 0.9);
      padding: 1rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 100%;
        height: 0;
        width: 100%;
        visibility: hidden;
        transition: all 0.4s ease-out;
        z-index: -1;
      }
      &:hover {
        transition: all 0.2s ease-out;
        cursor: pointer;
        background: transparent;
        &::before {
          background: rgb(67, 185, 209);
          height: 100%;
          visibility: visible;
        }
      }
      &:first-letter {
        text-transform: upperCase;
      }
      .dropdown-link {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #fff;
        z-index: 2;
      }
    }
  }
`;

export default Dropdown;
