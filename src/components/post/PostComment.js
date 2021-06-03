import { AiOutlineComment } from "react-icons/ai";

export default function PostComment(props) {
  const { comments, visibility, setVisibility, getComments } = props;


  function openCommentbox(){
    getComments();
    setVisibility(!visibility);
  }

  return (
    <div>
        <AiOutlineComment onClick={openCommentbox} />
        <p className="likes">{comments} comments</p> 
    </div>
  );
}




