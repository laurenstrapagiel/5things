import "./homepage.scss";

function Homepage() {
  return (
    <section className="homepage">
    <h1 className="homepage__header">Welcome!</h1>
    <p className="homepage__text">5Things is an anti-anxiety mindfulness exercise. Learn more about it here.</p>
    <p className="homepage__text">Login to track your exercises or click below to try it out.</p>
    <div className="homepage__start-button">
      Get started
    </div>
    </section>
  );
}
export default Homepage;
