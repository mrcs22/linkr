import { IoChevronDown } from "react-icons/io5"
import styled from "styled-components"

export default function HeaderMenu({showDropdownMenu, showDropdown}){
    return (
        <StyledHeaderMenu>
            <div className="chevron" shouldRotate={showDropdownMenu}>
                <IoChevronDown onClick={showDropdown}/>
            </div>
            <ProfileImage onClick={showDropdown}/>
        </StyledHeaderMenu>
    )
}

const StyledHeaderMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        display: inherit;
        align-items: inherit;
    }
    .chevron {
        font-size: 40px;
        transform: ${props => props.shouldRotate ? `rotate(180deg)` : ""};
    }
`

const ProfileImage = styled.img`
    width: 53px;
    height: 53px;
    border-radius: 27px;
    background: url("https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/5/avatar");
    background-size: cover;
    margin-left: 5px;
`