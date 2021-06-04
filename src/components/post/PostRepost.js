import { BiRepost } from "react-icons/bi";

export default function PostRepost(pros) {

    const { reposts, repostUser } = props;

    function toRepost(){
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