import React from "react";
import { FaArchive, FaLightbulb, FaTag, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import getStandardName from "../../utils/getStandardName";
import { MdEdit } from "react-icons/md";
import { toggleTagsModal } from "../../store/modal/modalSlice";
import { toggleMenu } from "../../store/menu/menuSlice";
import { v4 } from "uuid";

const items = [
  { icon: <FaArchive />, title: "Archive", id: v4() },
  { icon: <FaTrash />, title: "Trash", id: v4() },
];

const Sidebar = () => {
  const { tagsList } = useSelector((state) => state.tags);
  const { isOpen } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <Container $openMenu={isOpen}>
      <MainBox $openMenu={isOpen}>
        <StyledLogo>
          <h1>Keep</h1>
        </StyledLogo>
        <ItemsBox>
          <li onClick={() => dispatch(toggleMenu(false))}>
            <NavLink
              to={"/"}
              state={`notes`}
              className={({ isActive }) =>
                isActive ? "active-items" : "inactive-items"
              }
            >
              <span>
                <FaLightbulb />
                <span>Notes</span>
              </span>
            </NavLink>
          </li>

          {/* tags item */}

          {tagsList?.map(({ tag, id }) => (
            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
              <NavLink
                to={`/tag/${tag}`}
                state={tag}
                className={({ isActive }) =>
                  isActive ? "active-item" : "inactive-item"
                }
              >
                <span>
                  <FaTag />
                </span>
                <span>{getStandardName(tag)}</span>
              </NavLink>
            </li>
          ))}

          <li
            className="sidebar__edit-item"
            onClick={() =>
              dispatch(toggleTagsModal({ type: "edit", view: true }))
            }
          >
            <span>
              <MdEdit />
            </span>
            <span>Edit Notes</span>
          </li>

          {items.map(({ icon, title, id }) => (
            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
              <NavLink
                to={`/${title.toLowerCase()}`}
                state={title}
                className={({ isActive }) =>
                  isActive ? "active-item" : "inactive-item"
                }
              >
                <span>{icon}</span>
                <span>{title}</span>
              </NavLink>
            </li>
          ))}
        </ItemsBox>
      </MainBox>
    </Container>
  );
};

const Container = styled.nav`
  @media (max-width: 950px) {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: 200ms visibility ease-in-out, 250ms background-color ease-in-out;
    visibility: ${({ $openMenu }) => ($openMenu ? "normal" : "hidden")};
    background-color: ${({ $openMenu }) =>
      $openMenu ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0)"};
    cursor: pointer;
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
    transform: ${({ $openMenu }) =>
      $openMenu ? "translateX(0%)" : "translateX(-100%)"} 
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 20px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.3);
  span {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const ItemsBox = styled.ul`
  li {
    width: 100%;
    height: 60px;
    list-style: none;
    display: flex;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
  }

  svg {
    margin-right: 20px;
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  .active-item {
    background-color: rgba(255, 255, 255, 0.18);
  }

  .inactive-item {
    transition: 250ms background color ease-in-out;
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
  .sidebar__edit-item {
    padding-left: 20px;
    transition: 250ms background color ease-in-out;
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
`;

export default Sidebar;
