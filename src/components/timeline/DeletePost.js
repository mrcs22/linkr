import axios from "axios";
import { useContext } from "react"
import {IoTrashSharp} from "react-icons/io5"
import styled from "styled-components"
import UserContext from "../UserContext";

export default function DeletePost({ownerId, postId, getPosts}){
    const { user } = useContext(UserContext)

    const deletePost = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${postId}`, config)
        request.then((res) => {
            getPosts(user.token)
        })
        request.catch((err) => console.log(err.response.data))
    }

    return(
        <DeleteContainer onClick={deletePost} userId={user.user.id} ownerId={ownerId}>
            <IoTrashSharp />
        </DeleteContainer>
    )
}

const DeleteContainer = styled.div`
    display: ${props => props.userId === props.ownerId ? "block" : "none"};
    position: absolute;
    top: 17px;
    right: 25px;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
`