import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

export default function Header({avatar}) {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const showDropdown = () => {
    setShowDropdownMenu(!showDropdownMenu);
  };

  return (
    <>
      <StyledHeader>
        <Title>linkr</Title>
        <HeaderMenu
          avatar={avatar}
          showDropdownMenu={showDropdownMenu}
          showDropdown={showDropdown}
        />
      </StyledHeader>
      <DropdownMenu
        showDropdownMenu={showDropdownMenu}
        showDropdown={showDropdown}
      />
    </>
  );
}

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #151515;
  color: #fff;
  padding: 0 30px;
  z-index: 1;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 49px;
  font-family: "Passion One";
`;
