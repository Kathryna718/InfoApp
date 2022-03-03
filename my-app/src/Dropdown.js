import { Link } from "react-router-dom";
import "./App.css";

const Dropdown = () => {
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
    <div className="dropdown">
      <button onClick={myFunction} className="dropbtn">
        Dropdown
      </button>
      <div id="myDropdown" className="dropdown-content">
        <Link to="/">Home</Link>
        <Link to="/List">List</Link>
        <Link to="/Table">Table</Link>
        <Link to="/Feedback">Feedback</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
};
export default Dropdown;
