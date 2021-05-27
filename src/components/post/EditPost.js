import styled from "styled-components"
import { BsPencil } from "react-icons/bs"
import { useContext, useState } from "react"
import UserContext from "../UserContext"
import axios from "axios"

export default function EditPost({ownerId, text, postText}){
    const { user } = useContext(UserContext)
    const [isEditing, setIsEditing] = useState(false)
    const [editedText, setEditedText] = useState("")
    const [newText, setNewText] = useState(postText)

    const editPost = () => {
        setIsEditing(true)
        setEditedText(text)
    }

    const sendChanges = (e) => {
        e.preventDefault()
        const body = {text: editedText}
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const request = axios.put("https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/ID_DO_POST", body, config)
        request.then((res) => console.log(res))
    }

    return(
        <EditContainer userId={user.user.id} ownerId={ownerId} >
            <BsPencil className="edit_button" onClick={editPost}/>
            {isEditing ?
                <form onSubmit={sendChanges}><StyledInput value={editedText} autoFocus={true} onChange={(e) => setEditedText(e.target.value)}/></form> : 
                <Text>{postText}</Text>
            }  
        </EditContainer>
    )
}

const EditContainer = styled.div`
    color: #fff;
    max-width: 20px;
    cursor: pointer;
    position: relative;

    .edit_button {
        display: ${props => props.userId === props.ownerId ? "block" : "none"};
        position: absolute;
        top: -26px;
        left: 440px;
    }
`

const Text = styled.div`
  height: 44px;
  width: 503px;
  overflow: hidden;

  font-family: "Lato";
  font-size: 17px;
  color: #b7b7b7;

  background-color: inherit;

  border: none;
  border-radius: 7px;
  margin-top: 5px;

  @media (max-width: 611px) {
    height: 53px;
    width: 100%;

    font-size: 15px;
    margin-bottom: 13px;
  }
`;

const StyledInput = styled.input`
    font-family: "Lato";
    font-size: 14px;
    height: 44px;
    width: 503px;
    border-radius: 7px;
    border-style: none;
    margin-bottom: 5px;
    padding: 5px;
    word-break: break-word;

    :focus {
        outline: none;
    }
`