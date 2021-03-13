import React from "react";
//styling
import styled from "styled-components";
//components
import { MenuItems } from "./MenuItems";
//react router
import { Link } from "react-scroll";

const MobileDropdown = ({ toggle, setToggle, setMenu }) => {
  const clickHandler = () => {
    setMenu(false);
    setToggle(false);
  };
  return (
    <MobileDropdownComponent className={toggle ? "active" : ""}>
      <ul>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link
              className={item.cName}
              to={item.path}
              smooth={true}
              duration={500}
              spy={true}
              offset={-79}
              onClick={() => clickHandler()}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </MobileDropdownComponent>
  );
};

const MobileDropdownComponent = styled.div`
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
      .active {
        border-bottom: 1px solid rgb(67, 185, 209);
      }
    }
  }
`;

export default MobileDropdown;
