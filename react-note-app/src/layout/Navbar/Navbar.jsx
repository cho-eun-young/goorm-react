import React from "react";
import { FiMenu } from "react-icons/fi";
import { ButtonFill, Container } from "../../styles/styles";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../store/menu/menuSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <StyledNav>
      <div className="nav__menu">
        <FiMenu onClick={() => dispatch(toggleMenu(true))} />
      </div>
      <ContainerNav>
        <div className="nav__page-title">Page</div>
        <ButtonFill
          onClick={() => dispatch(toggleCreateNoteModal(true))}
          className="nav__btn"
        >
          <span>+</span>
        </ButtonFill>
      </ContainerNav>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 5px 0px;
  padding: 0 30px;

  .nav__menu {
    display: none;
  }

  @media (max-width: 950px) {
    padding: 0 15px;
    .nav__menu {
      display: block;
      flex-basis: 5%;
      margin: 8px 10px 0px 0px;
      svg {
        font-size: 1.65rem;
        cursor: pointer;
      }
    }
  }
`;
const ContainerNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  .nav__page-title {
    font-weight: 600;
    font-size: 1.3rem;
  }
  @media (max-width: 950px) {
    margin-top: 7px;
  }
`;

export default Navbar;
