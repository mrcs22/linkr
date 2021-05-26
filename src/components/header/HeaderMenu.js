import { useContext } from "react";

import { IoChevronDown } from "react-icons/io5";
import styled from "styled-components";

import UserContext from "../UserContext";

export default function HeaderMenu({ showDropdownMenu, showDropdown }) {
  const { user } = useContext(UserContext);
  return (
    <StyledHeaderMenu shouldRotate={showDropdownMenu}>
      <div className="chevron">
        <IoChevronDown onClick={showDropdown} />
      </div>
      <ProfileImage avatar={user.user.avatar} onClick={showDropdown} />
    </StyledHeaderMenu>
  );
}

const StyledHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .chevron {
    display: inherit;
    align-items: inherit;
    font-size: 40px;
    transform: ${(props) => (props.shouldRotate ? `rotateX(180deg)` : "")};
    transition: transform ease-in-out 0.3s;
  }
`;

const ProfileImage = styled.img`
  width: 53px;
  height: 53px;
  border-radius: 27px;
  background: url(${({ avatar }) => avatar});
  background-size: cover;
  margin-left: 5px;
`;
