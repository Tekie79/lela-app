import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
export const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="header-container">
      <div className="brand">
        <Link to="/">GOLALUS</Link>
      </div>
      <div className="active">
        <span class="burger">
          <i className="fa fa-bars" onClick={() => setShow(true)}></i>
        </span>
      </div>

      <div
        className={show ? "show menu-container" : "menu-container"}
        onClick={() => setShow(false)}
      >
        <Link to="/solutions">Solutions</Link>
        <Link to="/company">Company</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/join">
          <button className="btn-join">Join Us</button>
        </Link>
      </div>
    </div>
  );
};
