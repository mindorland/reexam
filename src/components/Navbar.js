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

  function handleSignOut(e) {
    e.preventDefault();
    Parse.User.logOut().then(() => {
      navigate("/");
    });
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div> */}
        <nav className={"nav-menu"}>
          {!Parse.User.current() && ( //when the user is not logged in.
            <>
              <ul className="nav-menu-items">
                <li className="nav-title">
                  <Link to="/">AsoPlan</Link>
                </li>
                <li className="nav-text">
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li className="nav-text">
                  <Link to="/login">LogIn</Link>
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
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
