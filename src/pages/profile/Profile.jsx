import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        {/* <img
          src="https://images.pexels.com/photos/908713/pexels-photo-908713.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="cover"
        /> */}
        <div className="cover"></div>
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon  />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon  />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon/>
            </a>
            <a href="http://facebook.com">
              <PinterestIcon  />
            </a>
          </div>
          <div className="center">
            <span>Mubarak</span>
            <div className="info">
              </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
