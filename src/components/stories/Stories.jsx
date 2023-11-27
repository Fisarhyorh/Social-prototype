import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"
import { Link } from "react-router-dom";

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Joshua",
      img: "https://images.pexels.com/photos/4490130/pexels-photo-4490130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Jerome",
      img: "https://images.pexels.com/photos/6044250/pexels-photo-6044250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Micheal",
      img: "https://images.pexels.com/photos/7015070/pexels-photo-7015070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Hazeemat",
      img: "https://images.pexels.com/photos/6833459/pexels-photo-6833459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src="https://images.pexels.com/photos/3581878/pexels-photo-3581878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span>Mubarak</span>
          <Link to={`create`}>
             <button>+</button>
          </Link>
         
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories