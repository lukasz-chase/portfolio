import React, { useState, useEffect } from "react";
//react router
import { Link } from "react-scroll";
//styling
import styled from "styled-components";
//components
import Dropdown from "./Dropdown";
import MobileDropdown from "./MobileDropdown";
//icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const Nav = () => {
  //state
  const [dropdown, setDropdown] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  //handlers
  const dropdownHandler = () =>
    window.innerWidth < 960 ? setDropdown(false) : setDropdown(true);
  const toggleDropdown = () =>
    window.innerWidth < 960 ? setToggle(!toggle) : setToggle(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <NavComponent scrollNav={scrollNav}>
      <div className="nav-logo">
        <span>
          <Link
            to="about-me"
            smooth={true}
            duration={500}
            offset={-80}
            className="nav-link"
          >
            Łukasz Ścigaj
          </Link>
        </span>
      </div>

      {menu ? (
        <AiOutlineClose
          size="2em"
          className="menu-icon"
          onClick={() => setMenu(!menu)}
        />
      ) : (
        <AiOutlineMenu
          size="2em"
          className="menu-icon"
          onClick={() => setMenu(!menu)}
        />
      )}

      <ul className={menu ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link
            to="about-me"
            smooth={true}
            duration={500}
            offset={-80}
            className="nav-link"
            onClick={() => setMenu(!menu)}
          >
            About me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="technologies"
            smooth={true}
            duration={500}
            offset={-80}
            className="nav-link"
            onClick={() => setMenu(!menu)}
          >
            Technologies
          </Link>
        </li>
        <li
          className="nav-item dropdown"
          onMouseEnter={dropdownHandler}
          onMouseLeave={() => setDropdown(false)}
          onClick={() => toggleDropdown()}
        >
          <span className="dropdown-header">
            Projects <IoMdArrowDropdown />
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
  background: ${({ scrollNav }) =>
    scrollNav
      ? "linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)"
      : "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  z-index: 10;
  transition: all 2s ease-in-out;
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
    color: #fff;
    padding: 1rem;
    @media screen and (max-width: 960px) {
      display: block;
      font-size: 1rem;
      cursor: pointer;
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
      justify-content: flex-start;
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
      justify-content: center;
      height: 80px;
      .nav-link,
      .dropdown-header {
        position: relative;
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 100%;
          height: 100%;
          width: 0;
          background: rgb(67, 185, 209);
          visibility: hidden;
          transition: all 0.4s ease-out;
          z-index: -1;
        }
        &:hover {
          border-radius: 4px;
          transition: all 0.2s ease-out;
          cursor: pointer;
          &::before {
            width: 100%;
            visibility: visible;
          }
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
