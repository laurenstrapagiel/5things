import "./header.scss";

function Header() {

  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__logo">5Things</h1>
      </div>
      <div className="header__right">
        <ul className="header__nav">
          <li className="header__nav-item">Exercise</li>
          <li className="header__nav-item">Profile</li>
          <li className="header__nav-item">About</li>
          <li className="header__nav-item">Login</li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
