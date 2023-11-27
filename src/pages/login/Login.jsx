import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import "./login.scss"

const Login = () => {



const handleLogin = () => {
  // login();
  // <Link to=""/>
}

  return (
    <div className='login'>
        <div className="card">
            <div className="left">
           <h1>Hello World.</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maxime sunt ab ratione repellendus ducimus eaque optio quaerat hic itaque!</p>
           <span>Don't have an account</span>
           <Link to="/register">
            <button>Register</button>
           </Link>
          
            </div>
            <div className="right">
                <h1>Login</h1>
                <form >
                    <input type="email" placeholder="Username" />
                   
                    <input type="password" placeholder="Password" />
                   
                    <span>Don't have an account?<Link to="/register" style={{color:"gray"}}>Register</Link> </span>
                    {/* <button>Login</button> */}
                     <Link to="/page">
                      <button>Login</button>
                    </Link>
                   
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;