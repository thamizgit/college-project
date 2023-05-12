import './NavBar.css';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [nav, setNav] = useState("home");
    return (
      <header>
        <ul className="navbar">
          <li>
            <Link
              className={`${nav === "home" && "active"}`}
              to="/"
              onClick={() => setNav("home")}
            >
              Home
            </Link>
          </li>
          <li className="dropdown">
            <Link
              className={`${nav === "departments" && "active"}`}
              to="/departments"
              onClick={() => setNav("departments")}
            >
              Departments
            </Link>
          </li>
          <li>
            <Link
              className={`${nav === "gallery" && "active"}`}
              to="/gallery"
              onClick={() => setNav("gallery")}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className={`${nav === "facilities" && "active"}`}
              to="/facility"
              onClick={() => setNav("facilities")}
            >
              Facilities
            </Link>
          </li>
          <li>
            <Link to="#">Online Payment</Link>
          </li>
          <li>
            <Link
              className={`${nav === "achievements" && "active"}`}
              to="/achievements"
              onClick={() => setNav("achievements")}
            >
              Achievements
            </Link>
          </li>
          <li>
            <Link
              className={`${nav === "contact" && "active"}`}
              to="/contact"
              onClick={() => setNav("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
        <article className="social-icons">
          <h3>
            <SocialIcon
              className="social-icon"
              url="https://twitter.com/jaketrent"
            ></SocialIcon>
          </h3>
          <h3>
            <SocialIcon
              target="_blank"
              className="social-icon"
              url="https://www.facebook.com/people/Sudharshana-polytechnic-college-thuraiyur/100069494058551/"
            ></SocialIcon>
          </h3>
          <h3>
            <SocialIcon
              className="social-icon"
              url="https://instagram.com/jaketrent"
            ></SocialIcon>
          </h3>
          <h3>
            <SocialIcon
              className="social-icon"
              url="https://google.com/jaketrent"
            ></SocialIcon>
          </h3>
        </article>
        <div  className="for-ham">
          <div className="menu-icon">
            <button className="ham"></button>
          </div>
        </div>
        <ul
          className={`for-small-device ${isClicked && "active"}`}
          onClick={() => setIsClicked(!isClicked)}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <Link to="/departments">Departments</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/facility">Facilities</Link>
          </li>
          <li>
            <Link to="#">Online Payment</Link>
          </li>
          <li>
            <Link to="/achievements">Achievements</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
    );
}
export default NavBar