import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
    
      // Close the dropdown if the user clicks outside of it
      window.onclick = function (event) {
        if (!event.target.matches(".dropbtn")) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
              openDropdown.classList.remove("show");
            }
          }
        }
      };
  return (
    <div>
      <nav>
        <div className="logo">Zelle</div>
        <ul className="nav-links">
          <li>
        <Link className="link" to="/">About Zelle</Link>
          </li>
          <li>
          <Link className="link" to="/Table">Getting Started</Link>
          </li>
          <li>
          <Link className="link" to="/List">Why Zelle</Link>
          </li>
          <li>
          <Link className="link"to="/Feedback">Survey</Link>
          </li>
          <li>
          <Link className="link"to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="dropdown">
          
            <MenuIcon className="dropbtn" onClick={myFunction}></MenuIcon>
          
          <div id="myDropdown" className="dropdown-content">
            <Link to="/">Home</Link>
            <Link to="/List">List</Link>
            <Link to="/Table">Table</Link>
            <Link to="/Feedback">Feedback</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
