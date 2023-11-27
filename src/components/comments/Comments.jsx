import { useContext } from "react";
import "../comments/comment.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { CurrentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum doloricing elit. Autem easpernatur ullam aperiam",
      name: "Mubarak",
      userId: 1,
      profilePicture:
       "https://images.pexels.com/photos/2091399/pexels-photo-2091399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      desc: "Lorem ipsum dadipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/953457/pexels-photo-953457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      desc: "Lorem ipsum dadipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Peter",
      userId: 2,
      profilePicture:
"https://images.pexels.com/photos/360438/pexels-photo-360438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src= "https://images.pexels.com/photos/3581878/pexels-photo-3581878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
