import { FaRegHeart } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ReactTooltip from 'react-tooltip'
import UserContext from "../UserContext";


const fixFabioMistake = (data) => {
  return {...data, "user.username": data.username || data["user.username"] || "", "user.id": data.userId || data["user.id"] || data.id}
}

export default function PostLike({ isPostLiked, setIsPostLiked, postId, likes}) {
  const [postLikes, setPostLikes] = useState(likes.map(fixFabioMistake))
  const { user } = useContext(UserContext)

  const config = {
    headers: {
        Authorization: `Bearer ${user.token}`
    }
  }

  if(postLikes.find((like) => like.id === user.user.id)){
    setIsPostLiked(true)
  }
  
  function likePost() {
    const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${postId}/like`, {}, config)
    request.then((res) => {
      setPostLikes(res.data.post.likes.map(fixFabioMistake))
      setIsPostLiked(true);
    })
  }
  
  function unlikePost() {
    const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${postId}/dislike`, {}, config)
    request.then((res) => {
      setPostLikes(res.data.post.likes.map(fixFabioMistake))
      setIsPostLiked(false);
    })
  }

  const getTooltip = () => {
    if(postLikes.length > 0) {
      if(postLikes.find((like) => like["user.id"] === user.user.id)){
        const otherLikes = postLikes.filter((like) => like["user.id"] !== user.user.id)
        if(otherLikes.length >= 2){
          return `Você, ${otherLikes[0]["user.username"]} e ${otherLikes.length - 1} pessoa${otherLikes.length-1 > 1 ? "s" : ""}`
        } else if(otherLikes.length === 1){
          return `Você e ${otherLikes[0]["user.username"]}`
        } else{
          return "Você"
        }
      } else {
        if(postLikes.length >= 3){
          return `${postLikes[0]["user.username"]}, ${postLikes[1]["user.username"]} e ${postLikes.length - 2} pessoa${postLikes.length-1 > 1 ? "s" : ""}`
        } else if(postLikes.length === 2){
          return `${postLikes[0]["user.username"]} e ${postLikes[1]["user.username"]}`
        } else{
          return `${postLikes[0]["user.username"]}`
        }
      }
    }
    return "0 pessoas curtiram"
  }
  
  return (
    <div>
      <ReactTooltip place="bottom" type="light" effect="solid" />
      {isPostLiked || postLikes.find((like) => like["user.id"] === user.user.id)? (
        <BsHeartFill className="liked" onClick={unlikePost} />
      ) : (
        <FaRegHeart onClick={likePost} />
      )}
      <p className="likes" data-tip={getTooltip()} >{postLikes.length} likes</p>
    </div>
  );
}
