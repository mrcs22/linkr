import styled from "styled-components";
import { BsPencil } from "react-icons/bs";
import { useContext, useState, useEffect } from "react";
import UserContext from "../UserContext";
import axios from "axios";

export default function EditPost({
  ownerId,
  text,
  postText,
  postId,
  highlightHashtags,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [newText, setNewText] = useState(text);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(UserContext);

  const editPost = () => {
    setIsEditing(!isEditing);
  };

  

  useEffect(() => {
    const escFunction = (event) => {
      if (event.keyCode === 27) {
        setIsEditing(false);
      }
    };
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [setIsEditing]);

  const sendChanges = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const body = { text: editedText };
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const request = axios.put(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${postId}`,
      body,
      config
    );
    request.then((res) => {
      setNewText(res.data.post.text);
      setIsEditing(false);
      setEditedText(res.data.post.text);
      setIsLoading(false);
    });
    request.catch((err) => {
      alert("Não foi possível salvar as alterações");
      setIsLoading(false);
    });
  };

  return (
    <EditContainer userId={user.user.id} ownerId={ownerId}>
      <BsPencil className="edit_button" onClick={editPost} />
      {isEditing ? (
        <form onSubmit={sendChanges}>
          <StyledInput
            value={editedText}
            autoFocus={true}
            onChange={(e) => setEditedText(e.target.value)}
            disabled={isLoading}
          />
        </form>
      ) : (
        <Text>{highlightHashtags(newText)}</Text>
      )}
    </EditContainer>
  );
}

const EditContainer = styled.div`
  color: #fff;
  max-width: 500px;
  cursor: pointer;
  position: relative;

  .edit_button {
    display: ${(props) => (props.userId === props.ownerId ? "block" : "none")};
    position: absolute;
    top: -26px;
    left: 440px;

    @media (max-width: 611px) {
      display: none;
    }
  }
`;

const Text = styled.div`
  width: 503px;
  overflow: hidden;

  font-family: "Lato";
  font-size: 17px;
  color: #b7b7b7;

  background-color: inherit;

  border: none;
  border-radius: 7px;
  margin-top: 5px;
  margin-bottom: 15px;

  @media (max-width: 611px) {
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
  :disabled {
    background-color: #999;
    color: #fff;
  }
`;
