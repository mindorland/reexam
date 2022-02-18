import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./CSS/Navbar.css";
import { IconContext } from "react-icons";
import Parse from "parse/dist/parse.min.js";

function Navbar() {
  //   const [sidebar, setSidebar] = useState(false)

  //   const showSidebar = () => setSidebar(!sidebar)
  const navigate = useNavigate();

  async function handleSignOut(e) {
    try {
      navigate("/");
      window.location.reload(true);
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        alert("Success! No user is logged in anymore!");
      }
      // Update state variable holding current user
      // getCurrentUser();
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  }

  return (
    <>
      <nav className={"nav-menu"}>
        {!Parse.User.current() && ( //when the user is not logged in.
          <>
            <ul className="nav-menu-items">
              <li className="nav-text">
                <Link to="/">AsoPlan</Link>
              </li>
              <li className="nav-text">
                <Link to="/signup">Sign Up</Link>
              </li>
              <li className="nav-text">
                <Link to="/login">LogIn</Link>
              </li>
              <li className="nav-text">
                <Link to="/shopping">Shopping</Link>
              </li>
            </ul>
          </>
        )}

        {Parse.User.current() && ( //when the user is logged in.
          <>
            <ul className="nav-menu-items">
              <li className="nav-text">
                <Link to="/">AsoPlan</Link>
              </li>
              <li className="nav-text">
                <Link to="/excursion">Excursion</Link>
              </li>
              <li className="nav-text">
                <Link to="/cars">Cars</Link>
              </li>
              <li className="nav-text">
                <Link to="/shopping">Shopping</Link>
              </li>
              <li className="username-text">
                Hello, {Parse.User.current().get("name")}
              </li>
              <li className="nav-text">
                <button onClick={handleSignOut}>Logout</button>
              </li>
            </ul>
          </>
        )}

        {Parse.User.current() && ( //when the user is logged in.
          <>
            <ul className="nav-menu-items">
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </nav>
    </>
  );
}

export default Navbar;
