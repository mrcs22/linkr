import { Link } from "react-router-dom"
import styled from "styled-components"

export default function DropdownMenu ({showDropdownMenu, showDropdown}){

    const logout = () => {
        localStorage.clear()
    }

    return (
        <MenuContainer isEnabled={showDropdownMenu} onClick={showDropdown}>
            <StyledMenu >
                <Link to="/my-posts">My posts</Link>
                <Link to="/my-likes">My likes</Link>
                <Link to="/" onClick={logout}>Logout</Link>
            </StyledMenu>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    display: ${props => props.isEnabled ? "block" : "none"};
    position: fixed;
    top: 72px;
    left: 0;
    background: blue;
    width: 100%;
    height: 100vh;
`

const StyledMenu = styled.div`
    position: absolute;
    right: 0;
    width: 150px;
    height: 110px;
    border-radius: 0 0 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background: #171717;
    color: #fff;
    font-family: "Lato";
    font-size: 17px;
`
