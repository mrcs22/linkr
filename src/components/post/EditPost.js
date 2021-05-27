import styled from "styled-components"
import { BsPencil } from "react-icons/bs"
import { useContext } from "react"
import UserContext from "../UserContext"

export default function EditPost({ownerId, postId, getPosts}){
    const { user } = useContext(UserContext)

    const editPost = () => {
        console.log("editar")
    }

    return(
        <EditContainer userId={user.user.id} ownerId={ownerId} onClick={editPost}>
            <BsPencil />
        </EditContainer>
    )
}

const EditContainer = styled.div`
    display: ${props => props.userId === props.ownerId ? "block" : "none"};
    color: #fff;
    max-width: 20px;
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 60px;
`