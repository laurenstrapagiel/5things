import "./homepage.scss";
import OneIcon from "../../assets/images/1icon.svg";
import TwoIcon from "../../assets/images/2icon.svg";
import ThreeIcon from "../../assets/images/3icon.svg";
import FourIcon from "../../assets/images/4icon.svg";
import FiveIcon from "../../assets/images/5icon.svg";
import { Link } from "react-router-dom";


function Homepage() {
  return (
    <section className="homepage">
      <h1 className="homepage__header">Welcome!</h1>
      <h2 className="homepage__text">
        5Things is an anti-anxiety mindfulness exercise that engages your senses
        to ground yourself.
      </h2>
      <p>To do this exercise, you simply name:</p>
      <ul>
        <li className="homepage__list-item">
          <img src={FiveIcon} alt="5" className="homepage__icon"></img>
          <h2 className="homepage__list-text"> Things you can see.</h2>
        </li>
        <li className="homepage__list-item">
          <img src={FourIcon} alt="4" className="homepage__icon"></img>
          <h2 className="homepage__list-text"> Things you can touch.</h2>
        </li>
        <li className="homepage__list-item">
          <img src={ThreeIcon} alt="3" className="homepage__icon"></img>
          <h2 className="homepage__list-text"> Things you can hear.</h2>
        </li>
        <li className="homepage__list-item">
          <img src={TwoIcon} alt="2" className="homepage__icon"></img>
          <h2 className="homepage__list-text"> Thing you can smell.</h2>
        </li>
        <li className="homepage__list-item">
          <img src={OneIcon} alt="1" className="homepage__icon"></img>
          <h2 className="homepage__list-text"> Thing you can taste.</h2>
        </li>
      </ul>
      <p>
        Read about why this an effective exercise <Link to="/about">here</Link>{" "}
        or <Link to="/login">login</Link> to get started.
      </p>
    </section>
  );
}
export default Homepage;
