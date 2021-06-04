import { BiRepost } from "react-icons/bi";

export default function PostRepost(props) {

    const { reposts, openModal } = props;

    function askToRepost(){
        openModal();
    }
  
    return (
      <div>
          <BiRepost onClick={askToRepost} />
          <p className="likes">{reposts} re-posts</p> 
      </div>
    );
  }

