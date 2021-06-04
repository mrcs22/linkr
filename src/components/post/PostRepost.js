import { BiRepost } from "react-icons/bi";

export default function PostRepost(props) {

    const { reposts, openRepost } = props;

    function askToRepost(){
        openRepost();
    }
  console.log(reposts);
    return (
      <div>
          <BiRepost onClick={askToRepost} />
          <p className="likes">{reposts} re-posts</p> 
      </div>
    );
  }

