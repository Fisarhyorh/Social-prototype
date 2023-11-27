import { Link } from "react-router-dom";
import "./register.scss"


const Register = () => {
    return (
      <div className='register'>
          <div className="card">
              <div className="left">
             <h1>Hello World.</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maxime sunt ab ratione repellendus ducimus eaque optio quaerat hic itaque!</p>
             <span>Have an account</span>
             <Link to="/">
              <button>Login</button>
             </Link>
            
              </div>
              <div className="right">
                  <h1>Register</h1>
                  <form>
                      <input type="text" placeholder="Username"/>
                      <input type="email" placeholder="Email"/>
                      <input type="password" placeholder="Password"/>
                      <Link to={`/page`}>
                         <button>Register</button>
                      </Link>
                      <span>Already have an account? <Link to="/" style={{color:"gray"}}>Login</Link></span>
                  </form>
              </div>
          </div>
      </div>
    )
  }

  export default Register;