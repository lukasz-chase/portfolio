import React, { useState } from "react";
//styling
import styled from "styled-components";
//animation
import { motion } from "framer-motion";

const Nav = () => {
  //state
  const [dropdown, setDropdown] = useState(false);
  return (
    <NavComponent>
      <div className="nav-logo">Portfolio</div>
      <div className="nav-links">
        <ul>
          <li>About me</li>
          <li className="nav-dropdown">
            <div
              className="dropdown-header"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              Projects
            </div>
            <div
              className="dropdown-body"
              style={{ display: dropdown ? "flex" : "none" }}
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <ul>
                <li>Sacharoza</li>
                <li>Hepar</li>
                <li>Parsec</li>
                <li>Benzen</li>
              </ul>
            </div>
          </li>
          <li>Contact</li>
        </ul>
      </div>
    </NavComponent>
  );
};

const NavComponent = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: upperCase;
  padding: 1rem;
  background: #8360c3;
  background: -webkit-linear-gradient(to right, #8360c3, #2ebf91);
  background: linear-gradient(to right, #8360c3, #2ebf91);
  .nav-logo {
    letter-spacing: 4px;
    padding: 0rem 1rem;
    align-self: flex-start;
  }
  .nav-links {
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      padding: 0rem 1rem;
      margin: 0;
      li {
        align-self: flex-start;
        text-align: center;
        width: 8rem;
      }
      .nav-dropdown {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .dropdown-header {
        }
        .dropdown-body {
          ul {
            display: flex;
            flex-direction: column;
            li {
              padding: 1rem;
            }
          }
        }
      }
    }
  }
`;
export default Nav;
