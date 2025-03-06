import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${(props) => (props.darkMode ? "#1a1a2e" : "#fff")};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${(props) => (props.darkMode ? "#ecf0f1" : "#3498db")};
  text-decoration: none;
  transition: all 0.3s ease;

  span {
    color: ${(props) => (props.darkMode ? "#f1c40f" : "#e74c3c")};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${(props) => (props.isOpen ? "0" : "-100%")};
    width: 70%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => (props.darkMode ? "#1a1a2e" : "#fff")};
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: ${(props) => (props.darkMode ? "#ecf0f1" : "#2c3e50")};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => (props.darkMode ? "#f1c40f" : "#3498db")};
  }

  @media (max-width: 768px) {
    margin: 1.5rem 0;
    font-size: 1.2rem;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.darkMode ? "#ecf0f1" : "#2c3e50")};
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => (props.darkMode ? "#f1c40f" : "#3498db")};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${(props) => (props.darkMode ? "#ecf0f1" : "#2c3e50")};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${(props) => (props.darkMode ? "#ecf0f1" : "#2c3e50")};
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarContainer darkMode={darkMode}>
      <Logo to="/" darkMode={darkMode}>
        Patrick<span>Ruggeri</span>
      </Logo>

      <MobileMenuButton onClick={toggleMenu} darkMode={darkMode}>
        <FaBars />
      </MobileMenuButton>

      <NavLinks isOpen={isOpen} darkMode={darkMode}>
        <CloseButton onClick={closeMenu} darkMode={darkMode}>
          <FaTimes />
        </CloseButton>

        <NavLink to="/" onClick={closeMenu} darkMode={darkMode}>
          Home
        </NavLink>
        <NavLink to="/projects" onClick={closeMenu} darkMode={darkMode}>
          Projects
        </NavLink>
        <NavLink to="/skills" onClick={closeMenu} darkMode={darkMode}>
          Skills
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu} darkMode={darkMode}>
          Contact
        </NavLink>

        <ThemeToggle onClick={toggleDarkMode} darkMode={darkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
