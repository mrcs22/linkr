import { FaRegHeart } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import axios from "axios";
import { useContext, useState } from "react";
import ReactTooltip from 'react-tooltip'
import UserContext from "../UserContext";

export default function PostLike({ isPostLiked, setIsPostLiked, likesNumber, postId }) {
  const [postLikes, setPostLikes] = useState([])
  const { user } = useContext(UserContext)

  const config = {
    headers: {
        Authorization: `Bearer ${user.token}`
    }
  }

  function likePost() {
    const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${postId}/like`, {}, config)
    request.then((res) => {
      setPostLikes(res.data.post.likes)
      setIsPostLiked(true);
    })
    
  }

  function unlikePost() {
    const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${postId}/dislike`, {}, config)
    request.then((res) => {
      setPostLikes(res.data.post.likes)
      setIsPostLiked(false);
    })
  }

  const getTooltip = () => {
    postLikes.find((like) => like.id === user.user.id)
  }

  return (
    <div>
      <ReactTooltip place="bottom" type="light" effect="solid" getContent={getTooltip}/>
      {isPostLiked ? (
        <BsHeartFill className="liked" onClick={unlikePost} />
      ) : (
        <FaRegHeart onClick={likePost} />
      )}
      <p className="likes" data-tip="Hello000000000000000000000000000">{likesNumber} likes</p>
    </div>
  );
}
