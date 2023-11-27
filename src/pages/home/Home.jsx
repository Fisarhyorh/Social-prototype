import "./home.scss"
import Story from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"

const Home = () => {
  return (
    <div className="Home">
       <Story/>
       <Posts/>
    </div>
  )
}

export default Home;