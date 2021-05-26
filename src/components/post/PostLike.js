import { FaRegHeart } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";

export default function PostLike({ isPostLiked, setIsPostLiked, likes }) {
  function likePost() {
    setIsPostLiked(true);
  }

  function unlikePost() {
    setIsPostLiked(false);
  }
  return (
    <div>
      {isPostLiked ? (
        <BsHeartFill className="liked" onClick={unlikePost} />
      ) : (
        <FaRegHeart onClick={likePost} />
      )}
      <p className="likes">{likes} likes</p>
    </div>
  );
}
