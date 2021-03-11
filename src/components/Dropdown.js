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
              spy={true}
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
      padding: 1rem;
      background: rgba(0, 0, 0, 0.9);
      &:hover {
        background-color: rgb(67, 185, 209);
        cursor: pointer;
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
      }
    }
  }
`;

export default Dropdown;
