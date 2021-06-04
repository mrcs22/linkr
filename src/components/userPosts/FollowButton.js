import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import styled from "styled-components"
import Loader from "react-loader-spinner"
import UserContext from "../UserContext"

export default function FollowButton(){
    const [isFollowing, setIsFollowing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const {user} = useContext(UserContext)
    const { id } = useParams()

    const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
    };

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/follows`, config)
        request.then((res) => {
            if(res.data.users.find((user) => user.id == id)){
                setIsFollowing(true)
            }
        })
        request.catch((err) => {}) 
    }, [])

    const followUser = () => {
        setIsLoading(true)
        if(isFollowing){
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/${id}/unfollow`, {}, config)
            request.then((res) => {
                setIsFollowing(false)
                setIsLoading(false)
            })
            request.catch((err) => {
                alert("Não foi possível deixar de seguir este usuário")
            }) 
        } else {
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/${id}/follow`, {}, config)
            request.then((res) => {
                setIsFollowing(true)
                setIsLoading(false)
            })
            request.catch((err) => {
                alert("Não foi possível seguir este usuário")
            })
        } 
    }

    if(isLoading){
        return (
            <StyledButton>
                <Loader type="ThreeDots" color="#00BFFF" height={30} width={50} />
            </StyledButton>        )
    }

    return(
        <StyledButton onClick={followUser} isFollowing={isFollowing}>{isFollowing ? "Unfollow" : "Follow"}</StyledButton>
    )
}

const StyledButton = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;
    width: 112px;
    height: 31px;
    background-color: ${props => props.isFollowing ? "#fff" : "#1877f2"};
    color: ${props => props.isFollowing ? "#1877f2" : "#fff"};
    border-radius: 5px;
    border-style: none;
    font-size: 14px;
`