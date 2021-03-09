import React from "react";
//styling
import styled from "styled-components";
//components
import { MenuItems } from "./MenuItems";
//react router
import { Link } from "react-scroll";

const ToggleDropdown = ({ toggle, setToggle, setMenu }) => {
  const clickHandler = () => {
    setMenu(false);
    setToggle(false);
  };
  return (
    <ToggleDropdownComponent className={toggle ? "active" : ""}>
      <ul>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => clickHandler()}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </ToggleDropdownComponent>
  );
};

const ToggleDropdownComponent = styled.div`
  .active {
    display: block;
  }
  ul {
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 960px) {
      display: none;
    }
    li {
      padding: 1rem;
      background: linear-gradient(
        90deg,
        rgb(28, 27, 27) 0%,
        rgb(26, 23, 23) 100%
      );
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

export default ToggleDropdown;
