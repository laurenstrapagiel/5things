import { Link } from "react-router-dom";
import "./header.scss";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__logo">
          <Link className="logo" to="/">
            5Things
          </Link>
        </h1>
      </div>
      <div className="header__right">
        <ul className="header__nav">
          <li className="header__nav-item">
            <Link to="/exercise">Exercise</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/login">Login</Link>
          </li>
          <li onClick={handleLogout} className="header__nav-item">
            Logout
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
