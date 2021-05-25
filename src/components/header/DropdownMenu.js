import { Link } from "react-router-dom"
import styled from "styled-components"

export default function DropdownMenu ({showDropdownMenu}){

    const logout = () => {
        localStorage.clear()
    }

    return (
        <StyledMenu isEnabled={showDropdownMenu}>
            <Link to="/my-posts">My posts</Link>
            <Link to="/my-likes">My likes</Link>
            <Link to="/" onClick={logout}>Logout</Link>
        </StyledMenu>
    )
}

const StyledMenu = styled.div`
    position: fixed;
    top: 72px;
    right: 0;
    width: 150px;
    height: 110px;
    border-radius: 0 0 0 20px;
    display: ${props => props.isEnabled ? "flex" : "none"};
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background: #171717;
    color: #fff;
    font-family: "Lato";
    font-size: 17px;
`
