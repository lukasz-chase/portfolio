import React, { useState } from "react";
//react router
import { Link } from "react-scroll";
//styling
import styled from "styled-components";
//components
import Dropdown from "./Dropdown";
import MobileDropdown from "./MobileDropdown";

const Nav = () => {
  //state
  const [dropdown, setDropdown] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState(false);
  //handlers
  const dropdownHandler = () =>
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(true);
  const toggleDropdown = () =>
    window.innerWidth < 960 ? setToggle(!toggle) : setToggle(false);
  return (
    <NavComponent>
      <div className="nav-logo">
        <span>
          <Link
            to="about-me"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="nav-link"
          >
            Łukasz Ścigaj
          </Link>
        </span>
      </div>
      <div className="menu-icon" onClick={() => setMenu(!menu)}>
        <i className={menu ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={menu ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link
            to="about-me"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="nav-link"
            onClick={() => setMenu(!menu)}
          >
            About me
          </Link>
        </li>
        <li
          className="nav-item dropdown"
          onMouseEnter={dropdownHandler}
          onMouseLeave={() => setDropdown(false)}
          onClick={() => toggleDropdown()}
        >
          <span className="dropdown-header">
            Projects <i className="fas fa-caret-down" />
          </span>
          {dropdown && <Dropdown />}
        </li>
        {toggle && (
          <MobileDropdown
            toggle={toggle}
            setMenu={setMenu}
            setToggle={setToggle}
          />
        )}
        <li className="nav-item">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            className="nav-link"
            onClick={() => setMenu(!menu)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </NavComponent>
  );
};

const NavComponent = styled.div`
  position: fixed;
  height: 80px;
  width: 100%;
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  z-index: 10;
  @media screen and (max-width: 960px) {
    justify-content: space-between;
  }

  .nav-logo {
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    text-decoration: none;
    font-size: 2rem;
    @media screen and (max-width: 960px) {
      font-size: 1.5rem;
    }
  }
  .menu-icon {
    display: none;
    @media screen and (max-width: 960px) {
      display: block;
      font-size: 1rem;
      cursor: pointer;
    }
    .fa-bars {
      color: #fff;
    }
  }
  .fa-bars,
  .fa-times {
    margin-right: 20px;
    font-size: 1.6rem;
    @media screen and (max-width: 960px) {
      color: #fff;
      font-size: 1.5rem;
    }
  }
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
    @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 110vh;
      position: absolute;
      top: 78px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }
    .nav-item {
      display: flex;
      align-items: center;
      height: 80px;
      .nav-link,
      .dropdown-header {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        &:hover {
          background-color: rgb(67, 185, 209);
          border-radius: 4px;
          transition: all 0.2s ease-out;
          cursor: pointer;
        }
        @media screen and (max-width: 960px) {
          text-align: center;
          padding: 2rem;
          width: 100%;
          display: table;
          &:hover {
            border-radius: 0;
          }
        }
      }
    }
  }
  .nav-links-mobile {
    display: none;
  }

  .nav-menu.active {
    @media screen and (max-width: 960px) {
      background: #242222;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
  }

  .nav-links-mobile {
    @media screen and (max-width: 960px) {
      display: block;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      background: #1888ff;
      text-decoration: none;
      color: #fff;
      font-size: 1.5rem;
      &:hover {
        background: #fff;
        color: #1888ff;
        transition: 250ms;
      }
    }
  }
  .NavbarItems {
    @media screen and (max-width: 960px) {
      position: relative;
    }
  }
`;

export default Nav;
