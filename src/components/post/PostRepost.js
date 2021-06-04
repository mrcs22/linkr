import { BiRepost } from "react-icons/bi";

export default function PostRepost(pros) {

    const { comments, visibility, setVisibility, getComments } = props;


    function openCommentbox(){
      getComments();
      setVisibility(!visibility);
    }
  
    return (
      <div>
          <BiRepost onClick={toRepost} />
          <p className="likes">{reposts} re-posts</p> 
      </div>
    );
  }