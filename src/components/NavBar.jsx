import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact-form">Contact Form</Link>
        </li>
        <li>
          <Link to="/reservation-form">Reservation Form</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
