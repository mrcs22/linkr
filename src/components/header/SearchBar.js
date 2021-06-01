import styled from "styled-components"
import { BsSearch } from "react-icons/bs"

export default function SearchBar(){
    return(
        <StyledSearchBar>
            <input placeholder="Search for people and friends"/>
            <BsSearch className="searchIcon"/>
        </StyledSearchBar>
    )
}

const StyledSearchBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 563px;
    height: 45px;
    border-radius: 8px;
    padding: 0 15px;
    color: #c6c6c6;

    input {
        border-style: none;
        :focus{
            outline: none;
        }
        ::placeholder{
            font-family: FontAwesome;
            font-size: 19px;
            color: #c6c6c6;
        }
    }
    .searchIcon {
        font-size: 20px;
    }
    
`