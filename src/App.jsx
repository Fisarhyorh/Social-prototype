import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/rightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Create from "./pages/createPost/create" 
import Posts from "./components/post/Post";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const {currentUser} = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };



  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Login/>
      ),
    },
    {
      path: "/page",
      element: (<Layout />),
      children : [
          {
          path: "/page",
          element: <Home />
        },
        {
          path: "profile/:id",
          element: <Profile />,
        },
        {
          path: "create",
          element: <Create />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
   
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
