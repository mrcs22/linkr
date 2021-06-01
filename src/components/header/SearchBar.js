import styled from "styled-components"
import { DebounceInput } from "react-debounce-input"
import { useContext, useState } from "react"
import axios from "axios"
import UserContext from "../UserContext"

export default function SearchBar({followedUsers}){
    const [searchedUser, setSearchedUser] = useState("")
    const { user } = useContext(UserContext)
    console.log(followedUsers)
    const search = () => {
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
            params: {
                username: `${searchedUser}`
            }
        };
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/search`, config)
        request.then((res) => {
            console.log(res.data)
        })
        request.catch((err) => {
            console.log(err.response.data)
            alert("Houve um erro ao pesquisar pelo usuário, tente novamente.")
        })
    }

    return(
        <StyledSearchBar>
            <DebounceInput 
                minLength={3}
                debounceTimeout={300}
                type="search"
                placeholder="Search for people and friends"
                onChange={(event) => {
                    setSearchedUser(event.target.value)
                    search()
                }}
            /> 
            <StyledResult></StyledResult>
        </StyledSearchBar>
    )
}

const StyledSearchBar = styled.div`
    position: relative;
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
        width: 100%;
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
`

const StyledResult = styled.div`

    position: absolute;
    z-index: -1;
    top: 35px;
    left: 0;
    width: 100%;
    height: 150px;
    background-color: #e7e7e7;
    border-radius: 0 0 5px 5px;
`