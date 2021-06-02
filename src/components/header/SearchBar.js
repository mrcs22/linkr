import styled from "styled-components"
import { DebounceInput } from "react-debounce-input"
import { useContext, useState } from "react"
import axios from "axios"
import UserContext from "../UserContext"
import { Link } from "react-router-dom"

export default function SearchBar({followedUsers}){
    const [results, setResults] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useContext(UserContext)

    const search = (searchName) => {
        if(searchName === ""){
            setResults(null)
            return
        }
        setIsLoading(true)
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
            params: {
                username: `${searchName}`
            }
        };
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/search`, config)
        request.then((res) => {
            setResults(res.data.users)
            setIsLoading(false)
        })
        request.catch((err) => {
            alert("Houve um erro ao pesquisar pelo usuário, tente novamente.")
            setIsLoading(false)
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
                    search(event.target.value)
                }}
            /> 
            <ResultContainer hasResult={results}>
                <Ul>
                    {isLoading && <Li>Loading...</Li>}
                    {results &&
                        !isLoading &&
                        results.map((result) => (
                            <Li key={result.id}>
                                <Link to={`/user/${result.id}`} className="link">
                                    <img src={result.avatar}/>
                                    <Name>{result.username}</Name>
                                    {followedUsers.find((user) => user.id === result.id) && 
                                        <FollowTag>• following</FollowTag>}
                                </Link>
                            </Li>
                        ))}
                </Ul>
            </ResultContainer>
        </StyledSearchBar>
    )
}

const StyledSearchBar = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

const ResultContainer = styled.div`
    display: ${props => props.hasResult ? "flex" : "none"};
    position: absolute;
    z-index: -1;
    top: 35px;
    left: 0;
    width: 100%;
    height: 250px;
    padding-top: 5px;
    background-color: #e7e7e7;
    border-radius: 0 0 5px 5px;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
`

const Ul = styled.ul`
`

const Li = styled.li`
    display: flex;
    align-items: center;
    margin: 20px;

    .link {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
`

const Name = styled.p`
    font-family: "Lato";
    font-size: 19px;
    color: #515151;
    margin: 0 12px;

`

const FollowTag = styled.span`
    font-family: "Lato";
    font-size: 19px;
    color: #c5c5c5;
`