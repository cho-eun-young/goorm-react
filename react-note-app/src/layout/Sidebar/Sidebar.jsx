import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  const { isOpen } = useSelector((state) => state.menu);
  return (
    <Container $openMenu={isOpen ? "open" : ""}>
      <MainBox $openMenu={isOpen ? "open" : ""}>
        <StyledLogo>
          <h1>Keep</h1>
        </StyledLogo>
        <ItemsBox>
          <li>
            <NavLink
              to={"/"}
              state={"notes"}
              className={({ isActive }) =>
                isActive ? "active-items" : "!active-items"
              }
            >
              <span>
                <FaLightbulb />
                <span>Notes</span>
              </span>
            </NavLink>
          </li>
        </ItemsBox>
      </MainBox>
    </Container>
  );
};

const Container = styled.nav`
  @media(max-width: 950px){
  position: absolute;
  z-index: 2;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  transition: 200ms visibility ease-in-out, 250ms background-color ease-in-out
  visibility: ${({ openMenu }) => (openMenu === "open" ? "nomal" : "hidden")}
  background-color: ${({ openMenu }) =>
    openMenu === "open" ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.8)"}
  }
`;

const MainBox = styled.div`
  width: 250px;
  height: 100%;
  min-height: 100vh;
  background-color: #fdefc3;

  @media (max-width: 950px) {
    transition: 350ms transform ease-in-out;
    position: absolute;
    z-index: 10;
    transform: ${({ openMenu }) =>
      openMenu === "open" ? "translateX(0%)" : "translateX(-100%)"};
  }
`;

const StyledLogo = styled.div``;

const ItemsBox = styled.ul``;

export default Sidebar;
