import { AiOutlineComment } from "react-icons/ai";
import { useEffect, useState, useContext } from "react";
import UserContext from "../UserContext";
import axios from "axios";
import styled from "styled-components";

export default function PostComment(props) {
  const { postId, comments, visibility, setVisibility } = props;
  const { user } = useContext(UserContext);
  const [notes, setNotes] = useState("");


function getComments(){
        const config = {
            headers: {
            Authorization: `Bearer ${user.token}`,
            },
        };

    const req = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${postId}/comments`,
      config
    );

    req.then((r) => {
      setNotes(r.data.comments);
      setVisibility(!visibility);
    });

    req.catch((r) => {
      console.log(r);
    });
  }



  return (
    <div>
        <AiOutlineComment onClick={getComments} />
        <p className="likes">{comments} comments</p> 
    </div>
  );
}




