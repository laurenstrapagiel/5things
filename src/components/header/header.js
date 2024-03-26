import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import Logo from "../../assets/logo/5.svg";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };
  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__logo">
          <Link className="logo" to="/">
            <img className="header__logo" src={Logo} alt="5Things logo" />
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
          {sessionStorage.getItem("token") ? (
            <li className="header__nav-item">
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : (
            <li className="header__nav-item">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
